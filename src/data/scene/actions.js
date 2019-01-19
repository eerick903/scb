import { createAction } from 'helpers/reduxHelper'

export const CHANGE_SCENE = 'DATA/SCENE/CHANGE_SCENE'

export const changeScene = ({scene, title}) => createAction(CHANGE_SCENE, {scene, title} )
