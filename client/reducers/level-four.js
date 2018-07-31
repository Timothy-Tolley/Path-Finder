import {LEVEL_FOUR_NEW, LEVEL_FOUR_RESET} from '../actions/level-four'

const initialState = false

const levelFour = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_FOUR_NEW): {
      return action.level
    }
    case (LEVEL_FOUR_RESET): {
      return intialState
    }
    default:
      return state
  }
}

export default levelFour
