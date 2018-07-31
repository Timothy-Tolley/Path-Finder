import {combineReducers} from 'redux'

import final from './final'
import levelOne from './level-one'
import levelTwo from './level-two'
import levelFour from './level-four'
import levelThree from './level-three'
import previousLevel from './previous-level'

export default combineReducers({
  levelOne,
  levelTwo,
  levelThree,
  levelFour,
  final, 
  previousLevel
})
