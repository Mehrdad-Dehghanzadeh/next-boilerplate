import type { TAuthApis, LoginResponseData, LoginResponse } from '@apis-type/Auth'
import type { LoginEmailModel, LoginMobileModel } from '@models/Login'

const authApi: TAuthApis = ($axios) => ({
  loginMobile(payload: LoginMobileModel) {
    return $axios.post<LoginResponseData, LoginResponse, LoginMobileModel>(
      '/authenticate',
      payload
    )
  },

  loginEmail(payload: LoginEmailModel) {
    return $axios.post<LoginResponseData, LoginResponse, LoginEmailModel>(
      '/authenticate',
      payload
    )
  }
})

export default authApi
