export default ($axios: any) => ({
  login(payload: any) {
    return $axios.post('/login', payload)
  },

  users() {
    return $axios.get('/m')
  }
})
