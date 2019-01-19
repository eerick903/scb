/* istanbul ignore file */
import { combineReducers } from 'redux'
import { reducer as data } from 'data/reducer'

const rootReducer = combineReducers({
  data
})

export default rootReducer
