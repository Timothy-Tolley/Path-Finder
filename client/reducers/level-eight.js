import {LEVEL_EIGHT_NEW, LEVEL_EIGHT_RESET, LEVEL_EIGHT_RESET_ACTIVE} from '../actions/level-eight'

const initialState = false

export const levelEight = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_EIGHT_NEW): {
      return action.level
    }
    case (LEVEL_EIGHT_RESET): {
      return initialState
    }
    case (LEVEL_EIGHT_RESET_ACTIVE): {
      return initialState
    }
    default:
      return state
  }
}

export const levelEightActive = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_EIGHT_NEW): {
      return true
    }
    case (LEVEL_EIGHT_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}
