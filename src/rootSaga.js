/* istanbul ignore file */
import { saga as dataSaga } from 'data/saga'

const saga = [
  ...dataSaga
]

export const initSaga = (sagaMiddleware) =>
  saga.forEach(sagaMiddleware.run.bind(sagaMiddleware))
