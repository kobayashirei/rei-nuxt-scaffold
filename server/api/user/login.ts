export default defineEventHandler(async (event) => {
  return {
    code: 200,
    data: {
      token: '123456'
    }
  }
})
