import {resetFinal} from './final'
import {resetLevelOne} from './level-one'
import {resetLevelTwo} from './level-two'
import {resetLevelFour} from './level-four'
import {resetLevelThree} from './level-three'
import {resetPreviousLevel} from './previous-level'

export function resetLevels () {
  return dispatch => {
    dispatch(resetFinal)
    dispatch(resetLevelOne)
    dispatch(resetLevelTwo)
    dispatch(resetLevelFour)
    dispatch(resetLevelThree)
    dispatch(resetPreviousLevel)
  }
}