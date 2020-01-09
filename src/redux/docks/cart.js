import { products } from '../../fake-data/'

export const Types = {
  REQUEST: 'cart/REQUEST',
  ADD: 'cart/ADD',
  REMOVE: 'cart/REMOVE',
}

const initialState = {
  products: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.ADD:
      const product = products.find(item => item.id === action.payload.id)
      return { ...state, products: [...state.products, product] }
    case Types.REMOVE:
      const productsRemove = products.filter(
        item => item.id !== action.payload.id,
      )
      return { ...state, products: productsRemove }
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

export const removeFromCart = id => {
  return {
    type: Types.REQUEST,
    payload: { id },
  }
}
