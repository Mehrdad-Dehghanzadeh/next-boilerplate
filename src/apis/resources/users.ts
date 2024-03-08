import type { SignUpDto } from '@models/Users'

export default ($axios: any) => ({
  signUp(payload: SignUpDto) {
    return $axios.post('/users', payload)
  }
})
