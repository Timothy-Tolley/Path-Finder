import {LEVEL_TWO_NEW, LEVEL_TWO_RESET} from '../actions/level-two'
import {baseLevel} from '../data/path-data'

const initialState = baseLevel

const levelTwo = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_TWO_NEW): {
      return action.level
    }
    case (LEVEL_TWO_RESET): {
      return intialState
    }
    default:
      return state
  }
}

export default levelTwo
