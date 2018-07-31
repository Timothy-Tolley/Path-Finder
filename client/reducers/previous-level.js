import {PREVIOUS_LEVEL_SET, PREVIOUS_LEVEL_RESET} from '../actions/previous-level'

const initialState = false

const previousLevel = (state = initialState, action) => {
  switch (action.type) {
    case (PREVIOUS_LEVEL_SET): {
      return action.previousLevel
    }
    case (PREVIOUS_LEVEL_RESET): {
      return intialState
    }
    default:
      return state
  }
}

export default previousLevel
