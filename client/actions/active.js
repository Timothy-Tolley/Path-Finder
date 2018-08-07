export const ACTIVE_ON = 'ACTIVE_ON'
export const ACTIVE_OFF = 'ACTIVE_OFF'

export function activeOn () {
  return {
    type: ACTIVE_ON
  }
}

export function activeOff () {
  return {
    type: ACTIVE_OFF
  }
}
