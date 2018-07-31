export const PREVIOUS_LEVEL_SET = 'PREVIOUS_LEVEL_SET'
export const PREVIOUS_LEVEL_RESET = 'PREVIOUS_LEVEL_RESET'

export function setPreviousLevel (previousLevel) {
  return {
    type: PREVIOUS_LEVEL_SET,
    previousLevel: previousLevel
  }
}

export function resetPreviousLevel () {
  return {
    type: PREVIOUS_LEVEL_RESET
  }
}