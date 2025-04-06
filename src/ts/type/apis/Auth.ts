import type { AxiosInstance, AxiosResponse } from 'axios'
import type { LoginEmailModel, LoginMobileModel } from '@models/Login'

export interface LoginResponseData {
  token: string
}

export interface LoginResponse extends AxiosResponse<LoginResponseData> {}

export type TAuthApis = ($axios: AxiosInstance) => {
  loginMobile: (payload: LoginMobileModel) => Promise<LoginResponse>
  loginEmail: (payload: LoginEmailModel) => Promise<LoginResponse>
}
