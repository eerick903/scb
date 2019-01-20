import { FETCH_ALBUMS_SUCCESS } from './actions'
import R from 'ramda'

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case FETCH_ALBUMS_SUCCESS: {
    const { userId, albums } = action.payload

    return R.assoc(userId, albums.filter(x => x.userId == userId))(state)
  }
  }

  return state
}
