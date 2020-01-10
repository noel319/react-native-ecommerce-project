import AsyncStorage from '@react-native-community/async-storage'

import { products as _products } from '../fake-data'
import { IDGenerator } from '../utils'

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
    const orders = await AsyncStorage.getItem('userOrders')
    console.log('listOrder: ', orders)
    let data = []
    if (orders) {
      data = JSON.parse(orders)
    }

    return {
      data,
    }
  }

  static async createOrder(products, total) {
    try {
      const orderNumber = new IDGenerator().generate()
      const order = {
        orderNumber,
        products,
        total,
        created_at: Date.now(),
      }
      const orders = await AsyncStorage.getItem('userOrders')
      let orderParser = []
      if (orders) {
        orderParser = JSON.parse(orders)
      }
      const ordersUpdate = [...orderParser, order]
      await AsyncStorage.setItem('userOrders', JSON.stringify(ordersUpdate))

      return { data: { message: 'Pedido realizado com sucesso' } }
    } catch (error) {
      throw {
        data: { message: 'Desculpe houve um erro ao processar o pagamento' },
      }
    }
  }
}

export default ProductService
