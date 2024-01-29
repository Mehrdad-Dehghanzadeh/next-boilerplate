export default ($axios: any) => ({
  login(payload: any) {
    return $axios.post('/login', payload)
  },

  profile() {
    return $axios.get('/profile')
  }
})
