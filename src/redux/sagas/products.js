import { call, put, takeLatest } from 'redux-saga/effects'

import { receiveProducts } from '../docks/products'
import productService from '../../services/productService'

import { Types as TypesProducts } from '../docks/products'

export function* getAllProducts(action) {
  const { type, search } = action ? action.payload : { search: '', type: '' }
  const response = yield call(productService.listProducts, {
    type,
    search,
  })
  yield put(receiveProducts(response.data))
}

export function* watchGetProducts() {
  yield takeLatest(TypesProducts.GET_ALL, getAllProducts)
}
