import { FETCH_TODOS_SUCCESS } from './actions'
import R from 'ramda'

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case FETCH_TODOS_SUCCESS: {
    const { userId, todos } = action.payload

    return R.assoc(userId, todos.filter(x => x.userId == userId))(state)
  }
  }

  return state
}
