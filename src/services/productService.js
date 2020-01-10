import AsyncStorage from '@react-native-community/async-storage'
import uuid from 'uuid/v4'

import { products as _products } from '../fake-data'

const alphabetNameSort = (data = []) => {
  if (!!data.length && !!data.name) {
    return data
  }
  data.sort(function(a, b) {
    if (a.name > b.name) {
      return 1
    }
    if (a.name < b.name) {
      return -1
    }
    // a must be equal to b
    return 0
  })
  return [...data]
}
const lowestPrice = (data = []) => {
  if (!!data.length && !!data.price) {
    return data
  }
  data.sort(function(a, b) {
    return a.price - b.price
  })
  return [...data]
}

const productsSort = type => {
  switch (type) {
    case 'alphabet':
      return alphabetNameSort(_products)
    case 'lowestPrice':
      return lowestPrice(_products)
    default:
      return _products
  }
}

const searchProducts = (search = '', data) => {
  const response = search.length
    ? data.filter(product => product.name.includes(search))
    : data

  return response
}

const fakeRequest = (data, ms = 500) =>
  new Promise(resolve => setTimeout(() => resolve(data), ms))

class ProductService {
  static async listProducts({ type, search }) {
    const dataSort = productsSort(type)
    const data = searchProducts(search, dataSort)
    return await fakeRequest({ data })
  }

  static productById(id) {
    const data = { data: _products.find(product => product.id === id) }
    return fakeRequest(data)
  }

  static async listOrder() {
    return await AsyncStorage.getItem('orders')
  }

  static async createOrder(order) {
    const orders = (await AsyncStorage.getItem('orders')) || []
    const ordersUpdate = [...orders, ...order]
    return await AsyncStorage.setItem('orders', ordersUpdate)
  }
}

export default ProductService
