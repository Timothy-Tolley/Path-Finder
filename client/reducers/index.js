import {combineReducers} from 'redux'

import final from './final'
import active from './active'
import levelOne from './level-one'
import levelTwo from './level-two'
import {levelFour, levelFourActive} from './level-four'
import {levelThree, levelThreeActive} from './level-three'
import previousLevel from './previous-level'

export default combineReducers({
  levelOne,
  levelTwo,
  levelThree,
  levelThreeActive,
  levelFour,
  levelFourActive,
  final,
  previousLevel,
  active
})
