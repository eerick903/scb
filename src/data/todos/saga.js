import apiService from 'services/apiService'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_TODOS, fetchTodosSuccess } from './actions'

export function* fetchTodos( {payload: {userId}}) {
  try {
    const res = yield call(apiService.fetchTodos, userId)

    yield put(fetchTodosSuccess(userId, res.data))
  } catch (e) {
    console.error(e)
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_TODOS, fetchTodos),
  ])
}
