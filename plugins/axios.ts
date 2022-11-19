import axios from 'axios'
import Cookies from 'universal-cookie'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  config.withCredentials = true
  return config
}, function(e) {
  // Do something with request error
  console.log('Axios Request Error', e?.response)
  let error = e
  return Promise.reject(error)
})

// Add a response interceptor
axios.interceptors.response.use((response) => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response
}, function(e) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log('Axios Response Error', e?.response)
  if (e?.response) {
    switch (e.response.status) {
      case 401:
        axios.defaults.headers.common['Authorization'] = undefined
        const cookies = new Cookies()
        cookies.remove('W_BO_TOKEN')
        // router.push(`/login?redirectUrl=${router.asPath}`)
        break
      default:
        break
    }
  }
  let error = e?.response || {}
  return Promise.reject(error)
})

export default axios
