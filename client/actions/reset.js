import {resetFinal} from './final'
import {resetLevelOne} from './level-one'
import {resetLevelTwo} from './level-two'
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
      dispatch(resetSelections())
      dispatch(resetLevelOne())
      dispatch(resetLevelTwo())
      dispatch(resetLevelThree())
      dispatch(resetLevelThreeActive())
      dispatch(resetLevelFour())
      dispatch(resetLevelFourActive())
      dispatch(resetLevelFive())
      dispatch(resetLevelFiveActive())
      dispatch(resetLevelSix())
      dispatch(resetLevelSixActive())
      dispatch(resetLevelSeven())
      dispatch(resetLevelSevenActive())
      dispatch(resetLevelEight())
      dispatch(resetLevelEightActive())
      dispatch(resetPreviousLevel())
      dispatch(activeOn())
    }, 3000)
  }
}
