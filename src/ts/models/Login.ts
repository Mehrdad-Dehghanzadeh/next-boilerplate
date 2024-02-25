export interface LoginMobileDto {
  password: string
  mobilePhoneNumber: string
}

export interface LoginEmailDto {
  password: string
  email: string
}

export type LoginDtos = LoginMobileDto | LoginEmailDto
