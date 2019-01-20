import { FETCH_PHOTOS_SUCCESS } from './actions'
import R from 'ramda'

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case FETCH_PHOTOS_SUCCESS: {
    const { albumId, photos } = action.payload

    return R.assoc(albumId, photos.filter(x => x.albumId == albumId))(state)
  }
  }

  return state
}
