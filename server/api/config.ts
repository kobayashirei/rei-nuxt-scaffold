export default defineEventHandler(async (event) => {
  const config = await import('~/config/config')
  return config
})
