import { combineReducers } from 'redux'

import { reducer as users } from 'data/users/reducer'
import { reducer as scene } from 'data/scene/reducer'
import { reducer as albums } from 'data/albums/reducer'
import { reducer as photos } from 'data/photos/reducer'

export const reducer = combineReducers({
  users,
  scene,
  albums,
  photos
})
