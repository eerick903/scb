import { combineReducers } from 'redux'

import { reducer as users } from 'data/users/reducer'
import { reducer as scene } from 'data/scene/reducer'

export const reducer = combineReducers({
  users,
  scene
})
