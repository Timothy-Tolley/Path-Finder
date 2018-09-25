import {setFinal} from './final'
import {setLevelOne} from './level-one'
import {setLevelTwo} from './level-two'
import {setLevelThree} from './level-three'
import {setLevelFour} from './level-four'
import {setLevelFive} from './level-five'
import {setLevelSix} from './level-six'
import {setLevelSeven} from './level-seven'
import {setLevelEight} from './level-eight'
import {setPreviousLevel} from './previous-level'

// export function setLevels (final, one, two, three, four, five, six, seven, eight, prev) {
//   return dispatch => {
//     if (final) {
//       dispatch(setFinal(final))
//     }
//     if (one) {
//       dispatch(setLevelOne(one))
//     }
//     if (two) {
//       dispatch(setLevelTwo(two))
//     }
//     if (three) {
//       dispatch(setLevelThree(three))
//     }
//     if (four) {
//       dispatch(setLevelFour(four))
//     }
//     if (five) {
//       dispatch(setLevelFive(five))
//     }
//     if (six) {
//       dispatch(setLevelSix(six))
//     }
//     if (seven) {
//       dispatch(setLevelSeven(seven))
//     }
//     if (eight) {
//       dispatch(setLevelEight(eight))
//     }
//     dispatch(setPreviousLevel(prev))
//   }
// }

export function setLevels (final, first, selection, incoming, prev) {
  return dispatch => {
    if (final) {
      dispatch(setFinal(final))
    }
    if (first === 1) {
      dispatch(setLevelOne(selection))
      dispatch(setLevelTwo(incoming))
    }
    if (first === 2) {
      dispatch(setLevelTwo(selection))
      dispatch(setLevelThree(incoming))
    }
    if (first === 3) {
      dispatch(setLevelThree(selection))
      dispatch(setLevelFour(incoming))
    }
    if (first === 4) {
      dispatch(setLevelFour(selection))
      dispatch(setLevelFive(incoming))
    }
    if (first === 5) {
      dispatch(setLevelFive(selection))
      dispatch(setLevelSix(incoming))
    }
    if (first === 6) {
      dispatch(setLevelSix(selection))
      dispatch(setLevelSeven(incoming))
    }
    if (first === 7) {
      dispatch(setLevelSeven(selection))
      dispatch(setLevelEight(incoming))
    }
    dispatch(setPreviousLevel(prev))
  }
}
