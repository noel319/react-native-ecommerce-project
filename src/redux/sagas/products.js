import { call, put, takeEvery } from 'redux-saga/effects'

import { receiveProducts } from '../docks/products'
import productService from '../../services/productService'

import { Types as TypesProducts } from '../docks/products'

export function* getProducts({ payload }) {
  const { type, search } = payload
  const response = yield call(productService.listProducts, {
    type,
    search,
  })
  yield put(receiveProducts(response.data))
}

export function* watchGetProducts() {
  yield takeEvery(TypesProducts.GET_ALL, getProducts)
}
