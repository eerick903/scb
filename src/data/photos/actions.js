import { createAction } from 'helpers/reduxHelper'

export const FETCH_PHOTOS = 'DATA/PHOTOS/FETCH_PHOTOS'
export const FETCH_PHOTOS_SUCCESS = 'DATA/PHOTOS/FETCH_PHOTOS_SUCCESS'

export const fetchPhotos = (albumId) => createAction(FETCH_PHOTOS, { albumId } )
export const fetchPhotosSuccess = (albumId, photos) => createAction(FETCH_PHOTOS_SUCCESS, { albumId, photos } )
