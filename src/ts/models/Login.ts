export interface LoginMobileModel {
  password: string
  mobilePhoneNumber: string
}

export interface LoginEmailModel {
  password: string
  email: string
}

export type LoginModel = LoginMobileModel | LoginEmailModel
