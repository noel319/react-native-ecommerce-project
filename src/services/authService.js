import httpClient from '../utils/httpClient'

class AuthService {
  static login({ email, password }) {
    const data = {
      email,
      password,
    }
    return httpClient.post('/api/login', data)
  }

  static register({ email, password }) {
    return httpClient.post('/api/register', {
      email,
      password,
    })
  }
}

export default AuthService
