import { createAction } from 'helpers/reduxHelper'

export const FETCH_USERS = 'DATA/USERS/FETCH_USERS'
export const FETCH_USERS_SUCCESS = 'DATA/USERS/FETCH_USERS_SUCCESS'


export const fetchUsers = () => createAction(FETCH_USERS, {} )
export const fetchUsersSuccess = users => createAction(FETCH_USERS_SUCCESS, { users } )
