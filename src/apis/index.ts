import type { TApis } from '@apis-type'
import $axios from './$axios'
import authApi from './resources/auth'
import usersApi from './resources/users'

const apis: TApis = {
  auth: authApi($axios),
  users: usersApi($axios)
}

export default apis
