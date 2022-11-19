import axios from 'axios'

axios.defaults.timeout = 10000
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.request.use((config) => {
  // Do something before request is sent
  // eslint-disable-next-line no-param-reassign
  config.withCredentials = true
  return config
}, function(e) {
  // Do something with request error
  console.log('Axios Request Error', e?.response)
  const error = e || {}
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
  const error = e?.response || {}
  return Promise.reject(error)
})

export default axios
