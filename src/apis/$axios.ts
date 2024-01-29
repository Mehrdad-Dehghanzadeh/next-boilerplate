import axios from 'axios'
import getConfig from 'next/config'
import interceptorsRequest from './interceptorsRequest'
import interceptorsResponse from './interceptorsResponse'

const { publicRuntimeConfig } = getConfig()
const defaultHeader = {
  'Accept-Language': 'fa, en-us'
}


const config = {
  baseURL: publicRuntimeConfig.apiBaseUrl,
  headers: defaultHeader
}

// instance of Axios
const $axios = axios.create(config)

interceptorsRequest($axios)
interceptorsResponse($axios)

export default $axios
