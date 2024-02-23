import axios from 'axios'
import interceptorsRequest from './interceptorsRequest'
import interceptorsResponse from './interceptorsResponse'

const defaultHeader = {
  'Accept-Language': 'fa, en-us'
}


const config = {
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: defaultHeader
}

// instance of Axios
const $axios = axios.create(config)

interceptorsRequest($axios)
interceptorsResponse($axios)

export default $axios
