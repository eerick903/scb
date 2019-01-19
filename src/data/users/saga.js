import apiService from 'services/apiService'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_USERS, fetchUsersSuccess } from './actions'

export function* fetchUsers() {
  try {
    const res = yield call(apiService.fetchUsers)

    yield put(fetchUsersSuccess(res.data))
  } catch (e) {
    console.error(e)
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_USERS, fetchUsers),
  ])
}
