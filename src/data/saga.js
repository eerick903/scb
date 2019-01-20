import usersSaga from './users/saga'
import albumsSaga from './albums/saga'
import photosSaga from './photos/saga'

export const saga = [
  usersSaga,
  albumsSaga,
  photosSaga
]