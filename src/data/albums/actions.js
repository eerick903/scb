import { createAction } from 'helpers/reduxHelper'

export const FETCH_ALBUMS = 'DATA/ALBUMS/FETCH_ALBUMS'
export const FETCH_ALBUMS_SUCCESS = 'DATA/ALBUMS/FETCH_ALBUMS_SUCCESS'

export const fetchAlbums = (userId) => createAction(FETCH_ALBUMS, { userId } )
export const fetchAlbumsSuccess = (userId, albums) => createAction(FETCH_ALBUMS_SUCCESS, { userId, albums } )
