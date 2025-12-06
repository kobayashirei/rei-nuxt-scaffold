export default defineEventHandler((event) => {
  return {
    status: 'ok',
    message: 'Hello from Nuxt 4 Server API',
    timestamp: new Date().toISOString(),
    version: '1.0.0'
  }
})
