import { type AxiosInstance } from 'axios'

export default ($axios: AxiosInstance) => {
  $axios.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

}
