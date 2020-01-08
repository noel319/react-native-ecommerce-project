import httpClient from './httpClient'
import images from './images'

export const delay = (ms = 1000) => new Promise(res => setTimeout(res, ms))

export { httpClient, images }
