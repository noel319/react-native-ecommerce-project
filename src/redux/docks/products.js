import { combineReducers } from 'redux'

export const Types = {
  GET_ALL: 'products/GET_ALL',
  RECEIVE: 'products/RECEIVE',
  ADD: 'products/ADD',
  REMOVE: 'products/REMOVE',
}

function products(state, action) {
  switch (action.type) {
    case Types.ADD:
      return {
        ...state,
        inventory: state.inventory - 1,
      }
    case Types.REMOVE:
      console.log('PRODUCT REMOVE: ', state.inventory)
      return {
        ...state,
        inventory: state.inventory + 1,
      }
    default:
      return state
  }
}

function byId(state = {}, action) {
  switch (action.type) {
    case Types.RECEIVE:
      const mapProductsToObject = action.payload.products.reduce(
        (obj, product) => {
          obj[product.id] = product
          return obj
        },
        {},
      )
      return {
        ...state,
        ...mapProductsToObject,
      }
    default:
      const { productId } = action
      if (productId) {
        return {
          ...state,
          [productId]: products(state[productId], action),
        }
      }
      return state
  }
}
function visibleIds(state = [], action) {
  switch (action.type) {
    case Types.RECEIVE:
      return action.payload.products.map(product => product.id)
    default:
      return state
  }
}

export default combineReducers({
  byId,
  visibleIds,
})

export const getProduct = (state, id) => state.byId[id]
export const getVisibleProducts = state =>
  state.visibleIds.map(id => getProduct(state, id))

export const receiveProducts = productsData => {
  return {
    type: Types.RECEIVE,
    payload: { products: productsData },
  }
}

export const getProducts = (type = '', search = '') => ({
  type: Types.GET_ALL,
  payload: { type, search },
})

export const addToCart = productId => {
  console.log('addToCart: ', productId)
  return {
    type: Types.ADD,
    productId,
  }
}

export const removeFromCart = productId => {
  console.log('removeFromCart: ', productId)
  return {
    type: Types.REMOVE,
    productId,
  }
}
