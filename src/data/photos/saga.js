import apiService from 'services/apiService'
import { all, call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_PHOTOS, fetchPhotosSuccess } from './actions'

export function* fetchPhotos( {payload: {albumId}}) {
  try {
    const res = yield call(apiService.fetchPhotos, albumId)

    yield put(fetchPhotosSuccess(albumId, res.data))
  } catch (e) {
    console.error(e)
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_PHOTOS, fetchPhotos),
  ])
}
