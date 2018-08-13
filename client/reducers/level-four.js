import {LEVEL_FOUR_NEW, LEVEL_FOUR_RESET, LEVEL_FOUR_RESET_ACTIVE} from '../actions/level-four'

const initialState = false

export const levelFour = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_FOUR_NEW): {
      return action.level
    }
    case (LEVEL_FOUR_RESET): {
      return initialState
    }
    default:
      return state
  }
}

export const levelFourActive = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_FOUR_NEW): {
      return true
    }
    case (LEVEL_FOUR_RESET_ACTIVE): {
      return false
    }
    default:
      return state
  }
}
