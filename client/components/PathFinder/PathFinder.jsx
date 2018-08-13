import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './pathfinder.css'
import {activeOn} from '../../actions/active'
import {setLevels} from '../../actions/set-levels'
import {addSelection} from '../../actions/selections'

import LevelOne from '../LevelOne/LevelOne'
import LevelTwo from '../LevelTwo/LevelTwo'
import LevelThree from '../LevelThree/LevelThree'
import LevelFour from '../LevelFour/LevelFour'
import LevelFive from '../LevelFive/LevelFive'
import LevelSix from '../LevelSix/LevelSix'
import LevelSeven from '../LevelSeven/LevelSeven'
import LevelEight from '../LevelEight/LevelEight'
import Final from '../Final/Final'

class Pathfinder extends React.Component {
  componentDidMount () {
    this.props.dispatch(activeOn())
  }

  markSelected (id, level) {
    // creates a deep copy of the level so does not directly effect the props
    let newLevel = JSON.parse(JSON.stringify(level))
    for (let i = 0; i < newLevel.length; i++) {
      for (let j = 0; j < newLevel[i].options.length; j++) {
        if (newLevel[i].options[j].id === Number(id)) {
          newLevel[i].options[j].selected = 'selected'
          this.recordSelection(newLevel[i].options[j].title)
        } else {
          newLevel[i].options[j].selected = 'notSelected'
        }
      }
    }
    return newLevel
  }

  shiftLeft (fraction) {
    const wordMap = document.getElementById('pathfinder-app')
    wordMap.scrollLeft += window.innerWidth / fraction
  }

  levelProceed (incomingLevel, selectedLevel) {
    let prev = {
      levelOne: this.props.levelOne,
      levelTwo: this.props.levelTwo,
      levelThree: this.props.levelThree,
      levelFour: this.props.levelFour,
      levelFive: this.props.levelFive,
      levelSix: this.props.levelSix,
      levelSeven: this.props.levelSeven,
      levelEight: this.props.levelEight,
      previousLevel: this.props.previousLevel,
      final: false,
      selections: this.props.selections
    }
    let finalCheck = false
    if (incomingLevel[0].options[0].responses === false) {
      finalCheck = true
    } else { finalCheck = false }

    if (this.props.levelSeven && !this.props.levelEight) {
      this.props.dispatch(setLevels(finalCheck, 7, selectedLevel, incomingLevel, prev))
    } else if (this.props.levelSix && !this.props.levelSeven) {
      this.props.dispatch(setLevels(finalCheck, 6, selectedLevel, incomingLevel, prev))
    } else if (this.props.levelFive && !this.props.levelSix) {
      this.props.dispatch(setLevels(finalCheck, 5, selectedLevel, incomingLevel, prev))
    } else if (this.props.levelFour && !this.props.levelFive) {
      this.props.dispatch(setLevels(finalCheck, 4, selectedLevel, incomingLevel, prev))
    } else if (this.props.levelThree && !this.props.levelFour) {
      this.props.dispatch(setLevels(finalCheck, 3, selectedLevel, incomingLevel, prev))
    } else if (this.props.levelTwo && !this.props.levelThree) {
      this.props.dispatch(setLevels(finalCheck, 2, selectedLevel, incomingLevel, prev))
    }
  }

  recordSelection (newTitle) {
    // creates a deep copy of the level so does not directly effect the props
    let newSelections = JSON.parse(JSON.stringify(this.props.selections))
    newSelections.push(newTitle)
    this.props.dispatch(addSelection(newSelections))
  }

  handleClick (e, option) {
    if (option.selected !== 'unassigned') {
      return
    }
    let targetId = e.target.id
    let currentLevelData = null
    if (!this.props.levelThree) {
      currentLevelData = this.props.levelTwo
    } else if (this.props.levelThree && !this.props.levelFour) {
      currentLevelData = this.props.levelThree
    } else if (this.props.levelFour && !this.props.levelFive) {
      currentLevelData = this.props.levelFour
    } else if (this.props.levelFive && !this.props.levelSix) {
      currentLevelData = this.props.levelFive
    } else if (this.props.levelSix && !this.props.levelSeven) {
      currentLevelData = this.props.levelSix
    } else if (this.props.levelSeven && !this.props.leveleight) {
      currentLevelData = this.props.levelSeven
    }
    let selectedLevel = this.markSelected(targetId, currentLevelData)
    if (!option.responses[0].options.responses) {
      this.levelProceed(option.responses, selectedLevel)
      setTimeout(() => this.shiftLeft(2), 100)
    } else if (this.props.levelFour && !this.props.final) {
      this.levelProceed(option.responses, selectedLevel)
      setTimeout(() => this.shiftLeft(4), 100)
    } else {
      this.levelProceed(option.responses, selectedLevel)
    }
  }

  render () {
    return (
      <CSSTransition
        classNames = 'move-fade'
        in = {this.props.active}
        timeout = {4000}
        component = {null}
        mountOnEnter
        unmountOnExit
      >
        <div className = 'pathfinder-app' id = 'pathfinder-app'>
          <LevelOne click = {this.handleClick.bind(this)}/>
          <LevelTwo click = {this.handleClick.bind(this)}/>
          <LevelThree click = {this.handleClick.bind(this)}/>
          <LevelFour click = {this.handleClick.bind(this)}/>
          <LevelFive click = {this.handleClick.bind(this)} />
          <LevelSix click = {this.handleClick.bind(this)}/>
          <LevelSeven click = {this.handleClick.bind(this)}/>
          <LevelEight click = {this.handleClick.bind(this)}/>
          <Final />
        </div>
      </CSSTransition >
    )
  }
}

function mapStateToProps (state) {
  return {
    levelOne: state.levelOne,
    levelTwo: state.levelTwo,
    levelThree: state.levelThree,
    levelThreeActive: state.levelThreeActive,
    levelFour: state.levelFour,
    levelFourActive: state.levelFourActive,
    levelFive: state.levelFive,
    levelFiveActive: state.levelFiveActive,
    levelSix: state.levelSix,
    levelSixActive: state.levelSixActive,
    levelSeven: state.levelSeven,
    levelSevenActive: state.levelSevenActive,
    levelEight: state.levelEight,
    levelEightActive: state.levelEightActive,
    final: state.final,
    previousLevel: state.previousLevel,
    active: state.active,
    selections: state.selections
  }
}

export default connect(mapStateToProps)(Pathfinder)
