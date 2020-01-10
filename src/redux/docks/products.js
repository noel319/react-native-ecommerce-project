export const Types = {
  GET_ALL: 'products/GET_ALL',
  RECEIVE: 'products/RECEIVE',
}

const initialState = {
  data: [],
  loading: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_ALL:
      return { ...state, loading: true }
    case Types.RECEIVE:
      return { ...state, data: action.payload.products, loading: false }
    default:
      return state
  }
}

export const receiveProducts = products => ({
  type: Types.RECEIVE,
  payload: { products },
})

export const getProducts = (type = '', search = '') => ({
  type: Types.GET_ALL,
  payload: { type, search },
})
