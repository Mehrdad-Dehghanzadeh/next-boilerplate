import type { LoginEmailDto, LoginMobileDto } from '@models/Login'

export default ($axios: any) => ({
  loginMobile(payload: LoginMobileDto) {
    return $axios.post('/authenticate', payload)
  },

  loginEmail(payload: LoginEmailDto) {
    return $axios.post('/authenticate', payload)
  }
})
