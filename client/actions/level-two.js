export const LEVEL_TWO_NEW = 'LEVEL_TWO_NEW'
export const LEVEL_TWO_RESET = 'LEVEL_TWO_RESET'
export const LEVEL_TWO_RESET_ACTIVE = 'LEVEL_TWO_RESET_ACTIVE'

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

export function resetLevelTwoActive () {
  return {
    type: LEVEL_TWO_RESET_ACTIVE
  }
}
