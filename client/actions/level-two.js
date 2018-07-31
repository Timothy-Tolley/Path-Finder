export const LEVEL_TWO_NEW = 'LEVEL_TWO_NEW'
export const LEVEL_TWO_RESET = 'LEVEL_TWO_RESET'

export function setLevelTwo (newLevel) {
  return {
    type: LEVEL_TWO_NEW,
    level: newLevel
  }
}

export function resetLevelTwo () {
  return {
    type: LEVEL_TWO_RESET
  }
}
