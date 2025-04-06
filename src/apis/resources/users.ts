import type { SignUpModel } from '@models/Users'
import {
  TUsersApi,
  SignUpResponse,
  SignUpResponseData,
  TemplateResponseData,
  TemplateResponse
} from '@apis-type/Users'

const usersApi: TUsersApi = ($axios) => ({
  signUp(payload: SignUpModel) {
    return $axios.post<SignUpResponseData, SignUpResponse, SignUpModel>('/users', payload)
  },

  template() {
    return $axios.get<TemplateResponseData, TemplateResponse>('/template')
  }
})

export default usersApi
