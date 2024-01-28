import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()
const config = {
  baseURL: publicRuntimeConfig.apiBaseUrl
}
const $axios = axios.create(config)

export default $axios
