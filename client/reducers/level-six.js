import {LEVEL_SIX_NEW, LEVEL_SIX_RESET, LEVEL_SIX_RESET_ACTIVE} from '../actions/level-six'

const initialState = false

export const levelSix = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_SIX_NEW): {
      return action.level
    }
    case (LEVEL_SIX_RESET): {
      return initialState
    }
    default:
      return state
  }
}

export const levelSixActive = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_SIX_NEW): {
      return true
    }
    case (LEVEL_SIX_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}
