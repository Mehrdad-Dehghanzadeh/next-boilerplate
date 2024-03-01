import $axios from './$axios'
import auth from './resources/auth'
import users from './resources/users'

const apis = {
  auth: auth($axios),
  users: users($axios)
}

export default apis
