import {setFinal} from './final'
import {setLevelOne} from './level-one'
import {setLevelTwo} from './level-two'
import {setLevelFour} from './level-four'
import {setLevelThree} from './level-three'

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
    dispatch(setFinal(previousLevelData.final))
    dispatch(setLevelOne(previousLevelData.levelOne))
    dispatch(setLevelTwo(previousLevelData.levelTwo))
    dispatch(setLevelThree(previousLevelData.levelThree))
    dispatch(setLevelFour(previousLevelData.levelFour))
    dispatch(setPreviousLevel(previousLevelData.previousLevel))
  }
}

export function resetPreviousLevel () {
  return {
    type: PREVIOUS_LEVEL_RESET
  }
}
