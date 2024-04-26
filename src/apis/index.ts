import { type Resource } from '@type/Apis'
import $axios from './$axios'
import auth from './resources/auth'
import users from './resources/users'

const apis: Record<Resource, any> = {
  auth: auth($axios),
  users: users($axios)
}

export default apis
