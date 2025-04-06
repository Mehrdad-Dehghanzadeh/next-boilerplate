import type { AxiosInstance, AxiosResponse } from 'axios'
import type { SignUpModel } from '@models/Users'

export interface SignUpResponseData {
  id: number
  mobilePhoneNumber: string
  password: string
  email: string
}

export interface SignUpResponse extends AxiosResponse<SignUpResponseData> {}

export type TemplateResponseData = {
  id: number
  mobilePhoneNumber: string
  password: string
  email: string
}[]

export interface TemplateResponse extends AxiosResponse<TemplateResponseData> {}

export type TUsersApi = ($axios: AxiosInstance) => {
  signUp: (payload: SignUpModel) => Promise<SignUpResponse>
  template: () => Promise<TemplateResponse>
}
