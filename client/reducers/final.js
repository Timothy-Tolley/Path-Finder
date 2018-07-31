import {FINAL} from '../actions/final'

const initialState = false

const final = (state = initialState, action) => {
  switch (action.type) {
    case (FINAL): {
      return action.final
    }
    default:
      return state
  }
}

export default final
