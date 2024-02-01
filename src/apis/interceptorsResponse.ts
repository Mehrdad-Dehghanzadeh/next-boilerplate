import { type AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { useTranslations } from 'next-intl'
import { getTranslations } from 'next-intl/server'

async function mapStatusMessageOnResponse(res: AxiosResponse) {
  const status = String(res?.status || '')
  const t =
    typeof window === 'undefined'
      ? await getTranslations('statusMessage')
      : useTranslations('statusMessage')

  return {
    statusMessage: t(status),
    ...res
  }
}

async function mapStatusMessageOnResponseError(err: AxiosError) {
  const status = String(err?.response?.status ?? '')
  const t =
    typeof window === 'undefined'
      ? await getTranslations('statusMessage')
      : useTranslations('statusMessage')

  return {
    statusMessage: t(status),
    ...err
  }
}

export default ($axios: AxiosInstance) => {
  $axios.interceptors.response.use(
    function (res) {
      const response = mapStatusMessageOnResponse(res)
      return Promise.resolve(response)
    },

    function (err) {
      const error = mapStatusMessageOnResponseError(err)
      return Promise.reject(error)
    }
  )
}
