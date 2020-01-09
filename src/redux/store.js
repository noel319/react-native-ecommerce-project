import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducers from './docks'
import sagas from './sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

const store = createStore(reducers, applyMiddleware(...middlewares))

sagaMiddleware.run(sagas)

export default store
