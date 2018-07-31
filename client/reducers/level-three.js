import {LEVEL_THREE_NEW, LEVEL_THREE_RESET} from '../actions/level-three'

const initialState = false

const levelThree = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_THREE_NEW): {
      return action.level
    }
    case (LEVEL_THREE_RESET): {
      return intialState
    }
    default:
      return state
  }
}

export default levelThree
