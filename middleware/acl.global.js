export default defineNuxtRouteMiddleware(to => {
    
  const accessToken = useCookie('accessToken').value
  const isLoggedIn = accessToken ? true : false
    
  // if (to.meta.unauthenticatedOnly) { // if logged in and try to access login page
  //   if (isLoggedIn)
  //     return navigateTo('/dashboard')
  //   else
  //     return undefined
  // }

  // if (!isLoggedIn) {
  //   return navigateTo('/')
  // }
  // else {
  //   return undefined
  // }

})
