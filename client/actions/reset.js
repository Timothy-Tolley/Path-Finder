import {resetFinal} from './final'
import {resetLevelOne} from './level-one'
import {resetLevelTwoActive, resetLevelTwo} from './level-two'
import {resetLevelThreeActive, resetLevelThree} from './level-three'
import {resetLevelFourActive, resetLevelFour} from './level-four'
import {resetLevelFiveActive, resetLevelFive} from './level-five'
import {resetLevelSixActive, resetLevelSix} from './level-six'
import {resetLevelSevenActive, resetLevelSeven} from './level-seven'
import {resetLevelEightActive, resetLevelEight} from './level-eight'
import {resetPreviousLevel} from './previous-level'
import {activeOff, activeOn} from './active'
import {resetSelections} from './selections'

export function resetLevels () {
  return dispatch => {
    dispatch(activeOff())
    dispatch(resetFinal())
    setTimeout(() => {
      dispatch(resetLevelTwoActive())
      dispatch(resetLevelThreeActive())
      dispatch(resetLevelFourActive())
      dispatch(resetLevelFiveActive())
      dispatch(resetLevelSixActive())
      dispatch(resetLevelSevenActive())
      dispatch(resetLevelEightActive())
    }, 2500)
    setTimeout(() => {
      dispatch(resetSelections())
      dispatch(resetLevelOne())
      dispatch(resetLevelTwo())
      dispatch(resetLevelThree())
      dispatch(resetLevelFour())
      dispatch(resetLevelFive())
      dispatch(resetLevelSix())
      dispatch(resetLevelSeven())
      dispatch(resetLevelEight())
      dispatch(resetPreviousLevel())
      dispatch(activeOn())
    }, 3000)
  }
}
