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

const fakeRequst = (data, ms = 500) =>
  new Promise(resolve => setTimeout(() => resolve(data), ms))

class ProductService {
  static listProducts(type) {
    return this.productsSort(type)
  }

  static productById(id) {
    const data = { data: _products.find(product => product.id === id) }
    return fakeRequst(data)
  }

  static searchProducts(search) {
    const data = {
      data: search.length
        ? _products.filter(product => product.name.includes(search))
        : _products,
    }

    return fakeRequst(data)
  }

  static productsSort(type) {
    switch (type) {
      case 'alphabet':
        return fakeRequst({ data: alphabetNameSort(_products) })
      case 'lowestPrice':
        return fakeRequst({ data: lowestPrice(_products) })
      default:
        return fakeRequst({ data: _products })
    }
  }
}

export default ProductService
