import { CHANGE_SCENE } from './actions'
import R from 'ramda'

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case CHANGE_SCENE:
    return R.assoc(action.payload.scene, action.payload)(state)
  }

  return state
}
