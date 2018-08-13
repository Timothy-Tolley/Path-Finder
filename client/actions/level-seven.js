export const LEVEL_SEVEN_NEW = 'LEVEL_SEVEN_NEW'
export const LEVEL_SEVEN_RESET = 'LEVEL_SEVEN_RESET'
export const LEVEL_SEVEN_RESET_ACTIVE = 'LEVEL_SEVEN_RESET_ACTIVE'

export function setLevelSeven (newLevel) {
  return {
    type: LEVEL_SEVEN_NEW,
    level: newLevel
  }
}

export function resetLevelSeven () {
  return {
    type: LEVEL_SEVEN_RESET
  }
}

export function resetLevelSevenActive () {
  return {
    type: LEVEL_SEVEN_RESET_ACTIVE
  }
}
