import { defu } from 'defu'
export const useApi = (url, method = 'GET', options = {}) => {
  const config = useRuntimeConfig()
  const accessToken = useCookie('accessToken')

  const defaults = {
    baseURL: config.public.apiBaseUrl,
    key: toValue(url),
    method: method.toUpperCase(),
    headers: accessToken.value ? { Authorization: `Bearer ${accessToken.value}` } : {},
  }

  if (['POST', 'PUT'].includes(defaults.method) && !options.headers?.['Content-Type']) {
    defaults.headers['Content-Type'] = 'application/json'
  }

  const params = defu(options, defaults)

  if (['POST', 'PUT'].includes(params.method)) {
    if (options.body) {
      params.body = JSON.stringify(options.body)
    }
  }

  return useFetch(url, params)
}
