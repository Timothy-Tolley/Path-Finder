export const FINAL = 'FINAL'

export function setFinal () {
  return {
    type: FINAL,
    final: true
  }
}

export function resetFinal () {
  return {
    type: FINAL,
    final: false
  }
}

