export const FINAL = 'FINAL'

export function setFinal (final) {
  return {
    type: FINAL,
    final: final
  }
}

export function resetFinal () {
  return {
    type: FINAL,
    final: false
  }
}
