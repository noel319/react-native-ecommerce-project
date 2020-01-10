import { all, fork } from 'redux-saga/effects'

import { watchGetProducts } from './products'

export default function* rootSaga() {
  yield all([fork(watchGetProducts)])
}
