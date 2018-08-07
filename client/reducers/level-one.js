import {LEVEL_ONE_NEW, LEVEL_ONE_RESET} from '../actions/level-one'
import {startPoint} from '../data/path-data'

const initialState = startPoint

const levelOne = (state = initialState, action) => {
  switch (action.type) {
    case (LEVEL_ONE_NEW): {
      return action.level
    }
    case (LEVEL_ONE_RESET): {
      return initialState
    }
    default:
      return state
  }
}

export default levelOne
