export const LEVEL_EIGHT_NEW = 'LEVEL_EIGHT_NEW'
export const LEVEL_EIGHT_RESET = 'LEVEL_EIGHT_RESET'
export const LEVEL_EIGHT_RESET_ACTIVE = 'LEVEL_EIGHT_RESET_ACTIVE'

export function setLevelEight (newLevel) {
  return {
    type: LEVEL_EIGHT_NEW,
    level: newLevel
  }
}

export function resetLevelEight () {
  return {
    type: LEVEL_EIGHT_RESET
  }
}

export function resetLevelEightActive () {
  return {
    type: LEVEL_EIGHT_RESET_ACTIVE
  }
}
