import {startPoint} from '../data/path-data'
import {ADD_SELECTION, STEP_BACK_SELECTION, RESET_SELECTIONS} from '../actions/selections'

const initialState = [startPoint[0].options[0].title]

const selections = (state = initialState, action) => {
  switch (action.type) {
    case (ADD_SELECTION): {
      return action.selectionArray
    }
    case (STEP_BACK_SELECTION): {
      return action.previousSelections
    }
    case (RESET_SELECTIONS): {
      return initialState
    }
    default:
      return state
  }
}

export default selections
