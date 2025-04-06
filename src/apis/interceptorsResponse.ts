import { type AxiosInstance, AxiosResponse } from 'axios'

async function mapStatusMessageOnResponse(res: AxiosResponse) {
  const status = String(res?.status || '')
  // const t =
  //   typeof window === 'undefined'
  //     ? await getTranslations('statusMessage')
  //     : useTranslations('statusMessage')
  return {
    // statusMessage: t(status),
    ...res
  }
}

export default ($axios: AxiosInstance) => {
  $axios.interceptors.response.use(
    function (res) {
      const response = mapStatusMessageOnResponse(res)
      return Promise.resolve(response)
    },

    function (err) {
      // const error = mapStatusMessageOnResponseError(err)
      return Promise.reject(err?.response)
    }
  )
}
