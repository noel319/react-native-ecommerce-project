export { httpClient } from './httpClient'
export { images } from './images'

export const delay = (ms = 1000) => new Promise(res => setTimeout(res, ms))
