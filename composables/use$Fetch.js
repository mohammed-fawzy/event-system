export const use$Fetch = $fetch.create({

  // Request interceptor
  async onRequest({ options }) {
    // Set baseUrl for all API calls
    options.baseURL = useRuntimeConfig().public.apiBaseUrl 

    const accessToken = useCookie('accessToken').value
    if (accessToken) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${accessToken}`,
      }
    }
  },
})