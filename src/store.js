import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from 'src/rootReducer'
import { initSaga } from 'src/rootSaga'

const sagaMiddleware = createSagaMiddleware()
const loggerMiddleware = createLogger()
const composeEnhancers = composeWithDevTools({})

let middlewares = [sagaMiddleware]

const debugMiddlewares = [loggerMiddleware]

middlewares = middlewares.concat(debugMiddlewares)

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      ...middlewares
    )
  )
)
initSaga(sagaMiddleware)

export default store
