import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src');
const imagesDir = path.join(__dirname, '../public/images');

function getFiles(dir, files = []) {
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      getFiles(filePath, files);
    } else {
      files.push(filePath);
    }
  }
  return files;
}

async function run() {
  console.log('--- Starting WebP Conversion & Reference Update ---');
  console.log(`Images Dir: ${imagesDir}`);
  console.log(`Source Dir: ${srcDir}`);
  
  // 1. Scan images directory
  const imageFiles = fs.readdirSync(imagesDir);
  const imageExtensions = ['.jpg', '.jpeg', '.png'];
  const processedImages = [];

  for (const filename of imageFiles) {
    const ext = path.extname(filename).toLowerCase();
    if (!imageExtensions.includes(ext)) continue;
    if (filename.includes('logo-')) {
      console.log(`Skipping logo: ${filename}`);
      continue;
    }

    const filePath = path.join(imagesDir, filename);
    const basename = path.basename(filename, ext);
    const webpFilename = `${basename}.webp`;
    const webpPath = path.join(imagesDir, webpFilename);

    try {
      // Convert to webp
      await sharp(filePath)
        .resize({ width: 1920, height: 1920, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(webpPath);
      
      console.log(`✓ Converted: ${filename} -> ${webpFilename}`);
      
      // Delete original
      fs.unlinkSync(filePath);
      
      processedImages.push({
        original: filename,
        webp: webpFilename,
        basename: basename,
        ext: ext
      });
    } catch (err) {
      console.error(`✗ Error converting ${filename}:`, err.message);
    }
  }

  // 2. Scan and update references in src/ files
  const srcFiles = getFiles(srcDir);
  let updatedFilesCount = 0;

  for (const file of srcFiles) {
    if (!/\.(tsx|ts|jsx|js|css|json)$/.test(file)) continue;

    let content = fs.readFileSync(file, 'utf-8');
    let hasChanges = false;

    for (const img of processedImages) {
      const originalEncoded = encodeURIComponent(img.original);
      const webpEncoded = encodeURIComponent(img.webp);

      if (content.includes(img.original)) {
        content = content.split(img.original).join(img.webp);
        hasChanges = true;
      }
      if (content.includes(originalEncoded)) {
        content = content.split(originalEncoded).join(webpEncoded);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      fs.writeFileSync(file, content, 'utf-8');
      console.log(`✓ Updated references in: ${path.relative(srcDir, file)}`);
      updatedFilesCount++;
    }
  }

  console.log('\n--- WebP Conversion Summary ---');
  console.log(`Images converted: ${processedImages.length}`);
  console.log(`Source files updated: ${updatedFilesCount}`);
  console.log('-------------------------------');
}

run();
