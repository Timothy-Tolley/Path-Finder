export const ADD_SELECTION = 'ADD_SELECTION'
export const STEP_BACK_SELECTION = 'STEP_BACK_SELECTION'
export const RESET_SELECTIONS = 'RESET_SELECTIONS'

export function addSelection (selectionArray) {
  return {
    type: ADD_SELECTION,
    selectionArray
  }
}

export function removeLastSelection (previousSelections) {
  return {
    type: STEP_BACK_SELECTION,
    previousSelections
  }
}

export function resetSelections () {
  return {
    type: RESET_SELECTIONS
  }
}
