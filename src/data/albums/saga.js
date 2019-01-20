import apiService from 'services/apiService'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_ALBUMS, fetchAlbumsSuccess } from './actions'

export function* fetchAlbums( {payload: {userId}}) {
  try {
    const res = yield call(apiService.fetchAlbums, userId)

    yield put(fetchAlbumsSuccess(userId, res.data))
  } catch (e) {
    console.error(e)
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_ALBUMS, fetchAlbums),
  ])
}
