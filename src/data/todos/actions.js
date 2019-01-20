import { createAction } from 'helpers/reduxHelper'

export const FETCH_TODOS = 'DATA/TODOS/FETCH_TODOS'
export const FETCH_TODOS_SUCCESS = 'DATA/TODOS/FETCH_TODOS_SUCCESS'

export const fetchTodos = (userId) => createAction(FETCH_TODOS, { userId } )
export const fetchTodosSuccess = (userId, todos) => createAction(FETCH_TODOS_SUCCESS, { userId, todos } )
