import { FETCH_TODOS_SUCCESS, TOGGLE_TODO } from './actions'
import R from 'ramda'

export const reducer = (state = {}, action) => {
  switch (action.type) {
  case FETCH_TODOS_SUCCESS: {
    const { userId, todos } = action.payload

    const todoObject = R.compose(
      R.reduce((a, b) => {
        a[b.id] = b

        return a
      }, {}),
      R.filter(x => x.userId == userId)
    )(todos)

    return R.assoc(userId, todoObject)(state)
  }
  case TOGGLE_TODO: {
    const { userId, todoId } = action.payload

    return R.assocPath([userId, todoId, 'completed'], !state[userId][todoId].completed)(state)
  }
  }

  return state
}
