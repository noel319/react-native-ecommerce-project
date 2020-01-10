import { products as _products } from '../../fake-data/'

export const Types = {
  REQUEST: 'cart/REQUEST',
  ADD: 'cart/ADD',
  REMOVE: 'cart/REMOVE',
  EMPTY: 'cart/EMPTY',
}

const initialState = {
  products: [],
  total: 0,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD:
      const product = _products.find(item => item.id === action.payload.id)
      const hasProduct = state.products.some(
        item => item.id === action.payload.id,
      )
      if (hasProduct) {
        product.quantity += 1
        const total = Number(state.total) + Number(product.price)
        return { ...state, products: [...state.products], total }
      } else {
        product.quantity = 1
        const total = Number(state.total) + Number(product.price)
        return { ...state, products: [...state.products, product], total }
      }
    case Types.REMOVE:
      const removeItem = state.products.find(
        item => product.id === action.payload.id,
      )
      const productsClear = _products.filter(
        item => item.id !== action.payload.id,
      )
      const total =
        Number(state.total) - Number(removeItem.price) * removeItem.quantity
      return { ...state, products: productsClear, total }
    case Types.EMPTY:
      return { ...state, products: [], total: 0 }
    default:
      return state
  }
}

export const addToCart = (id = 1) => {
  return {
    type: Types.ADD,
    payload: { id },
  }
}

export const clearCart = (id = 1) => {
  return {
    type: Types.EMPTY,
  }
}

export const removeFromCart = id => {
  return {
    type: Types.REQUEST,
    payload: { id },
  }
}
