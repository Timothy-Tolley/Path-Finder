import {setFinal} from './final'
import {removeLastSelection} from './selections'
import {setLevelOne} from './level-one'
import {setLevelTwo} from './level-two'
import {setLevelThree, resetLevelThreeActive, resetLevelThree} from './level-three'
import {setLevelFour, resetLevelFourActive, resetLevelFour} from './level-four'
import {setLevelFive, resetLevelFiveActive, resetLevelFive} from './level-five'
import {setLevelSix, resetLevelSixActive, resetLevelSix} from './level-six'
import {setLevelSeven, resetLevelSevenActive, resetLevelSeven} from './level-seven'
import {resetLevelEightActive, resetLevelEight} from './level-eight'

export const PREVIOUS_LEVEL_SET = 'PREVIOUS_LEVEL_SET'
export const PREVIOUS_LEVEL_RESET = 'PREVIOUS_LEVEL_RESET'

export function setPreviousLevel (previousLevel) {
  return {
    type: PREVIOUS_LEVEL_SET,
    previousLevel: previousLevel
  }
}

export function usePreviousLevel (previousLevelData) {
  return dispatch => {
    if (previousLevelData.levelSeven && !previousLevelData.levelEight) {
      dispatch(resetLevelEightActive())
      dispatch(setLevelSeven(previousLevelData.levelSeven))
      dispatch(setLevelSix(previousLevelData.levelSix))
      dispatch(setLevelFive(previousLevelData.levelFive))
      dispatch(setLevelFour(previousLevelData.levelFour))
      dispatch(setLevelThree(previousLevelData.levelThree))
      setTimeout(() => dispatch(resetLevelEight()), 1000)
    } else if (previousLevelData.levelSix && !previousLevelData.levelSeven) {
      dispatch(resetLevelSevenActive())
      dispatch(resetLevelEight())
      dispatch(setLevelSix(previousLevelData.levelSix))
      dispatch(setLevelFive(previousLevelData.levelFive))
      dispatch(setLevelFour(previousLevelData.levelFour))
      dispatch(setLevelThree(previousLevelData.levelThree))
      setTimeout(() => dispatch(resetLevelSeven()), 1000)
    } else if (previousLevelData.levelFive && !previousLevelData.levelSix) {
      dispatch(resetLevelSixActive())
      dispatch(resetLevelEight())
      dispatch(resetLevelSeven())
      dispatch(setLevelFive(previousLevelData.levelFive))
      dispatch(setLevelFour(previousLevelData.levelFour))
      dispatch(setLevelThree(previousLevelData.levelThree))
      setTimeout(() => dispatch(resetLevelSix()), 1000)
    } else if (previousLevelData.levelFour && !previousLevelData.levelFive) {
      dispatch(resetLevelFiveActive())
      dispatch(resetLevelEight())
      dispatch(resetLevelSeven())
      dispatch(resetLevelSix())
      dispatch(setLevelFour(previousLevelData.levelFour))
      dispatch(setLevelThree(previousLevelData.levelThree))
      setTimeout(() => dispatch(resetLevelFive()), 1000)
    } else if (previousLevelData.levelThree && !previousLevelData.levelFour) {
      dispatch(resetLevelFourActive())
      dispatch(resetLevelEight())
      dispatch(resetLevelSeven())
      dispatch(resetLevelSix())
      dispatch(resetLevelFive())
      dispatch(setLevelThree(previousLevelData.levelThree))
      setTimeout(() => dispatch(resetLevelFour()), 1000)
    } else if (previousLevelData.levelTwo && !previousLevelData.levelThree) {
      dispatch(resetLevelFourActive())
      dispatch(resetLevelThreeActive())
      dispatch(resetLevelEight())
      dispatch(resetLevelSeven())
      dispatch(resetLevelSix())
      dispatch(resetLevelFive())
      dispatch(resetLevelFour())
      setTimeout(() => dispatch(resetLevelThree()), 1000)
    }
    dispatch(removeLastSelection(previousLevelData.selections))
    dispatch(setFinal(previousLevelData.final || false))
    dispatch(setLevelOne(previousLevelData.levelOne))
    dispatch(setLevelTwo(previousLevelData.levelTwo))
    dispatch(setPreviousLevel(previousLevelData.previousLevel))
  }
}

export function resetPreviousLevel () {
  return {
    type: PREVIOUS_LEVEL_RESET
  }
}
