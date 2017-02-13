import {
  SET_URL, SET_STATE, ERROR, UPDATE_SETTINGS,
  SHOW_UNLINK_CONFIRMATION, HIDE_UNLINK_CONFIRMATION
} from '../actions'

export const initialState = {
  settings: {
    serverUrl: '',
    backupImages: false,
    displayUnlinkConfirmation: false
  }
}

export const mobile = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return action.state
    case SET_URL:
      return Object.assign({}, state, { settings: { serverUrl: action.url }, error: null })
    case ERROR:
      return Object.assign({}, state, { error: action.error })
    case UPDATE_SETTINGS:
      return Object.assign({}, state, { settings: Object.assign({}, state.settings, action.newSettings) })
    case SHOW_UNLINK_CONFIRMATION:
      return Object.assign({}, state, { settings: { displayUnlinkConfirmation: true } })
    case HIDE_UNLINK_CONFIRMATION:
      return Object.assign({}, state, { settings: { displayUnlinkConfirmation: false } })
  }
  return state
}
