export const LEVEL_ONE_NEW = 'LEVEL_ONE_NEW'
export const LEVEL_ONE_RESET = 'LEVEL_ONE_RESET'

export function setLevelOne (newLevel) {
  return {
    type: LEVEL_ONE_NEW,
    level: newLevel
  }
}

export function resetLevelOne () {
  return {
    type: LEVEL_ONE_RESET
  }
}
