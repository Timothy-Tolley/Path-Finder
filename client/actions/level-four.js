export const LEVEL_FOUR_NEW = 'LEVEL_FOUR_NEW'
export const LEVEL_FOUR_RESET = 'LEVEL_FOUR_RESET'
export const LEVEL_FOUR_RESET_ACTIVE = 'LEVEL_FOUR_RESET_ACTIVE'

export function setLevelFour (newLevel) {
  return {
    type: LEVEL_FOUR_NEW,
    level: newLevel
  }
}

export function resetLevelFour () {
  return {
    type: LEVEL_FOUR_RESET
  }
}

export function resetLevelFourActive () {
  return {
    type: LEVEL_FOUR_RESET_ACTIVE
  }
}
