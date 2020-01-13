import { all, fork } from 'redux-saga/effects'

import { watchGetProducts, getAllProducts } from './products'

export default function* rootSaga() {
  yield all([fork(getAllProducts), fork(watchGetProducts)])
}
