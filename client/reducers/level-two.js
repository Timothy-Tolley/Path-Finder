import {LEVEL_TWO_NEW, LEVEL_TWO_RESET, LEVEL_TWO_RESET_ACTIVE} from '../actions/level-two'

const initialState = false

export const levelTwo = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_TWO_NEW): {
      return action.level
    }
    case (LEVEL_TWO_RESET): {
      return initialState
    }
    case (LEVEL_TWO_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}

export const levelTwoActive = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_TWO_NEW): {
      return true
    }
    case (LEVEL_TWO_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}
