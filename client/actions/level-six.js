export const LEVEL_SIX_NEW = 'LEVEL_SIX_NEW'
export const LEVEL_SIX_RESET = 'LEVEL_SIX_RESET'
export const LEVEL_SIX_RESET_ACTIVE = 'LEVEL_SIX_RESET_ACTIVE'

export function setLevelSix (newLevel) {
  return {
    type: LEVEL_SIX_NEW,
    level: newLevel
  }
}

export function resetLevelSix () {
  return {
    type: LEVEL_SIX_RESET
  }
}

export function resetLevelSixActive () {
  return {
    type: LEVEL_SIX_RESET_ACTIVE
  }
}
