import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const IMAGES_DIR = path.join(__dirname, '../public/images')
const BACKUP_DIR = path.join(__dirname, '../images_backup')

async function optimizeImages() {
  console.log('--- Starting Image Optimization ---')
  console.log(`Scanning directory: ${IMAGES_DIR}`)

  // Create backup directory if it doesn't exist
  if (!fs.existsSync(BACKUP_DIR)) {
    fs.mkdirSync(BACKUP_DIR, { recursive: true })
    console.log(`Created backup directory: ${BACKUP_DIR}`)
  }

  // Read files in images directory
  const files = fs.readdirSync(IMAGES_DIR)
  const imageExtensions = ['.jpg', '.jpeg', '.png']
  const imagesToProcess = files.filter(file => {
    const ext = path.extname(file).toLowerCase()
    return imageExtensions.includes(ext)
  })

  console.log(`Found ${imagesToProcess.length} images to process.`)
  
  let totalSavedBytes = 0
  let totalOriginalBytes = 0
  let totalOptimizedBytes = 0

  for (const filename of imagesToProcess) {
    const filePath = path.join(IMAGES_DIR, filename)
    const backupPath = path.join(BACKUP_DIR, filename)

    // Skip if it's a directory
    const stats = fs.statSync(filePath)
    if (stats.isDirectory()) continue

    const originalSize = stats.size
    totalOriginalBytes += originalSize

    // Backup the original file if not backed up yet
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(filePath, backupPath)
    }

    try {
      const ext = path.extname(filename).toLowerCase()
      const image = sharp(backupPath)
      const metadata = await image.metadata()

      let pipeline = sharp(backupPath)
      let needsRescale = false
      let newWidth = metadata.width
      let newHeight = metadata.height

      // Scale down if any dimension exceeds 1920px (sufficient for high-quality web displays)
      if ((metadata.width && metadata.width > 1920) || (metadata.height && metadata.height > 1920)) {
        needsRescale = true
        pipeline = pipeline.resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
        if (metadata.width > metadata.height) {
          newWidth = 1920
          newHeight = Math.round((metadata.height * 1920) / metadata.width)
        } else {
          newHeight = 1920
          newWidth = Math.round((metadata.width * 1920) / metadata.height)
        }
      }

      // Compress based on format
      if (ext === '.jpg' || ext === '.jpeg') {
        pipeline = pipeline.jpeg({ quality: 80, progressive: true })
      } else if (ext === '.png') {
        pipeline = pipeline.png({ compressionLevel: 8, quality: 80 })
      }

      // Write to temp file first to avoid corruption, then overwrite original
      const tempPath = `${filePath}.tmp`
      await pipeline.toFile(tempPath)
      fs.renameSync(tempPath, filePath)

      const optimizedSize = fs.statSync(filePath).size
      totalOptimizedBytes += optimizedSize
      const savedBytes = originalSize - optimizedSize
      totalSavedBytes += savedBytes
      
      const reductionPercent = ((savedBytes / originalSize) * 100).toFixed(1)
      const formattedOriginal = (originalSize / (1024 * 1024)).toFixed(2) + ' MB'
      const formattedOptimized = (optimizedSize / 1024).toFixed(1) + ' KB'

      console.log(`✓ Optimized ${filename}:`)
      if (needsRescale) {
        console.log(`  Dimensions: ${metadata.width}x${metadata.height}px -> ${newWidth}x${newHeight}px`)
      } else {
        console.log(`  Dimensions: ${metadata.width}x${metadata.height}px (kept)`)
      }
      console.log(`  Size: ${formattedOriginal} -> ${formattedOptimized} (-${reductionPercent}%)`)

    } catch (err) {
      console.error(`✗ Error processing ${filename}:`, err.message)
    }
  }

  const originalMB = (totalOriginalBytes / (1024 * 1024)).toFixed(2)
  const optimizedMB = (totalOptimizedBytes / (1024 * 1024)).toFixed(2)
  const savedMB = (totalSavedBytes / (1024 * 1024)).toFixed(2)
  const overallReduction = ((totalSavedBytes / totalOriginalBytes) * 100).toFixed(1)

  console.log('\n--- Optimization Summary ---')
  console.log(`Total images processed: ${imagesToProcess.length}`)
  console.log(`Original total size:   ${originalMB} MB`)
  console.log(`Optimized total size:  ${optimizedMB} MB`)
  console.log(`Total space saved:     ${savedMB} MB (-${overallReduction}%)`)
  console.log(`Backup of all original files saved to: ${BACKUP_DIR}`)
  console.log('----------------------------')
}

optimizeImages()
