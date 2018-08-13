import {LEVEL_FIVE_NEW, LEVEL_FIVE_RESET, LEVEL_FIVE_RESET_ACTIVE} from '../actions/level-five'

const initialState = false

export const levelFive = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_FIVE_NEW): {
      return action.level
    }
    case (LEVEL_FIVE_RESET): {
      return initialState
    }
    default:
      return state
  }
}

export const levelFiveActive = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_FIVE_NEW): {
      return true
    }
    case (LEVEL_FIVE_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}
