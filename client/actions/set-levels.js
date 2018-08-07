import {setFinal} from './final'
import {setLevelOne} from './level-one'
import {setLevelTwo} from './level-two'
import {setLevelFour} from './level-four'
import {setLevelThree} from './level-three'
import {setPreviousLevel} from './previous-level'

export function setLevels (final, one, two, three, four, prev) {
  return dispatch => {
    if (final) {
      dispatch(setFinal(final))
    }
    if (one) {
      dispatch(setLevelOne(one))
    }
    if (two) {
      dispatch(setLevelTwo(two))
    }
    if (three) {
      dispatch(setLevelThree(three))
    }
    if (four) {
      dispatch(setLevelFour(four))
    }
    dispatch(setPreviousLevel(prev))
  }
}
