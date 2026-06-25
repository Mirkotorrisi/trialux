const NETLIFY_BUILD_HOOK = process.env.NETLIFY_BUILD_HOOK_URL

export const triggerNetlifyBuild = async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') return
  if (!NETLIFY_BUILD_HOOK) return

  await fetch(NETLIFY_BUILD_HOOK, { method: 'POST' })
}
