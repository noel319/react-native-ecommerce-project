import axios from 'axios'
import AsyncStorage from '@react-native-community/async-storage'

const axiosInstace = axios.create({
  baseURL: 'https://reqres.in',
})

axiosInstace.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('userToken')

    if (token) {
      config.headers.Authorization = token
    }

    return Promise.resolve(config)
  },
  error => Promise.reject(error),
)

axiosInstace.interceptors.response.use(
  async response => response,
  error => Promise.reject(error),
)

const httpClient = axiosInstace

export default httpClient
