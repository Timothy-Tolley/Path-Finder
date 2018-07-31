import {EXAMPLE} from '../actions/example'

const initialState = {example: ''}

export default function example (state = initialState, action) {
  switch (action.type) {
    case EXAMPLE:
      return {
        ...state,
        example: action.exampleData
      }
    default:
      return state
  }
}
