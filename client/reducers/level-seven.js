import {LEVEL_SEVEN_NEW, LEVEL_SEVEN_RESET, LEVEL_SEVEN_RESET_ACTIVE} from '../actions/level-seven'

const initialState = false

export const levelSeven = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_SEVEN_NEW): {
      return action.level
    }
    case (LEVEL_SEVEN_RESET): {
      return initialState
    }
    case (LEVEL_SEVEN_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}

export const levelSevenActive = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_SEVEN_NEW): {
      return true
    }
    case (LEVEL_SEVEN_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}
