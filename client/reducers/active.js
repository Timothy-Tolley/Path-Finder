import {ACTIVE_ON, ACTIVE_OFF} from '../actions/active'

const initialState = false

const active = (state = initialState, action) => {
  switch (action.type) {
    case (ACTIVE_ON): {
      return true
    }
    case (ACTIVE_OFF): {
      return false
    }
    default:
      return state
  }
}

export default active
