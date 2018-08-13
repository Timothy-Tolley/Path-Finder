export const LEVEL_FIVE_NEW = 'LEVEL_FIVE_NEW'
export const LEVEL_FIVE_RESET = 'LEVEL_FIVE_RESET'
export const LEVEL_FIVE_RESET_ACTIVE = 'LEVEL_FIVE_RESET_ACTIVE'

export function setLevelFive (newLevel) {
  return {
    type: LEVEL_FIVE_NEW,
    level: newLevel
  }
}

export function resetLevelFive () {
  return {
    type: LEVEL_FIVE_RESET
  }
}

export function resetLevelFiveActive () {
  return {
    type: LEVEL_FIVE_RESET_ACTIVE
  }
}
