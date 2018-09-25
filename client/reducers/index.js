import {combineReducers} from 'redux'

import final from './final'
import active from './active'
import levelOne from './level-one'
import {levelTwo, levelTwoActive} from './level-two'
import {levelThree, levelThreeActive} from './level-three'
import {levelFour, levelFourActive} from './level-four'
import {levelFive, levelFiveActive} from './level-five'
import {levelSix, levelSixActive} from './level-six'
import {levelSeven, levelSevenActive} from './level-seven'
import {levelEight, levelEightActive} from './level-eight'
import previousLevel from './previous-level'
import selections from './selections'

export default combineReducers({
  levelOne,
  levelTwo,
  levelTwoActive,
  levelThree,
  levelThreeActive,
  levelFour,
  levelFourActive,
  levelFive,
  levelFiveActive,
  levelSix,
  levelSixActive,
  levelSeven,
  levelSevenActive,
  levelEight,
  levelEightActive,
  final,
  previousLevel,
  active,
  selections
})
