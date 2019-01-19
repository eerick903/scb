import { FETCH_USERS_SUCCESS } from './actions'

export const reducer = (state = [], action) => {
  switch (action.type) {
  case FETCH_USERS_SUCCESS:
    return action.payload.users
  }

  return state
}
