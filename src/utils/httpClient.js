import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const axiosInstace = axios.create({
  baseURL: 'https://reqres.in',
})

axiosInstace.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('userToken')

    if (token && !!token.token_type && !!token.access_token) {
      config.headers.Authorization = `${token.token_type} ${token.access_token}`
    }

    return config
  },
  error => Promise.reject(error),
)

axiosInstace.interceptors.response.use(
  async response => response,
  error => Promise.reject(error),
)

const httpClient = axiosInstace

export default httpClient
