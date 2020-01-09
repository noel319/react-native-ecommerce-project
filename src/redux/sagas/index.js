import { all } from 'redux-saga/effects'

import watchCartAdd from './cart'

export default function* rootSaga() {
  yield all([watchCartAdd()])
}
