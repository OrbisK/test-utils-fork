export default defineNuxtRouteMiddleware((to, from) => {
  const isTrue = useTrue()

  if (!isTrue) {
    return abortNavigation({ statusCode: 401 })
  }
})
