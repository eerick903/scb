import usersSaga from './users/saga'
import albumsSaga from './albums/saga'
import photosSaga from './photos/saga'
import todosSaga from './todos/saga'

export const saga = [
  usersSaga,
  albumsSaga,
  photosSaga,
  todosSaga
]