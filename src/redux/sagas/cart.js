import { put, takeEvery } from 'redux-saga/effects'

import { Types } from '../docks/cart'

function* cart(action) {
  console.log('CART: ', action)
  // yield put({ type: Types.ADD })
}

export default function* watchCartAdd() {
  yield takeEvery(Types.REQUEST, cart)
}
