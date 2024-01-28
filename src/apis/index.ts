import $axios from './$axios'
import auth from './resources/auth'

const apis = {
  auth: auth($axios)
}

export default apis
