import { combineReducers } from 'redux'

import { Types as TypeProducts, getProduct } from './products'

export const Types = {
  REQUEST: 'cart/REQUEST',
  EMPTY: 'cart/EMPTY',
  CHECKOUT_REQUEST: 'cart/CHECKOUT_REQUEST',
  CHECKOUT_SUCCESS: 'cart/CHECKOUT_SUCCESS',
  CHECKOUT_FAILURE: 'cart/CHECKOUT_FAILURE',
}

const initialState = {
  quantityById: {},
}

function quantityById(state = initialState.quantityById, action) {
  const { productId } = action
  switch (action.type) {
    case Types.CHECKOUT_SUCCESS:
      return initialState.quantityById
    case TypeProducts.ADD:
      return {
        ...state,
        [productId]: (state[productId] || 0) + 1,
      }
    case TypeProducts.REMOVE:
      const qty = (state[productId] || 0) - 1
      const copy = { ...state }
      console.log('COPY REMOVE: ', copy[productId])
      if (qty > 0) {
        copy[productId] = qty
      } else {
        delete copy[productId]
      }
      return copy
    default:
      return state
  }
}

export default combineReducers({
  quantityById,
})

export const clearCart = (id = 1) => {
  return {
    type: Types.EMPTY,
  }
}

export function getQuantity(state, productId) {
  return state.quantityById[productId] || 0
}

export function getAddedIds(state) {
  return Object.keys(state.quantityById)
}

export function getCart(state) {
  return state.cart
}

export function getTotal(state) {
  return getAddedIds(state.cart)
    .reduce(
      (total, id) =>
        total +
        getProduct(state.products, id).price * getQuantity(state.cart, id),
      0,
    )
    .toFixed(2)
}

export function getCartProducts(state) {
  return getAddedIds(state.cart).map(id => ({
    ...getProduct(state.products, id),
    quantity: getQuantity(state.cart, id),
  }))
}
