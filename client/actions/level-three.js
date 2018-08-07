export const LEVEL_THREE_NEW = 'LEVEL_THREE_NEW'
export const LEVEL_THREE_RESET = 'LEVEL_THREE_RESET'

export function setLevelThree (newLevel) {
  return {
    type: LEVEL_THREE_NEW,
    level: newLevel
  }
}

export function resetLevelThree () {
  return {
    type: LEVEL_THREE_RESET
  }
}
