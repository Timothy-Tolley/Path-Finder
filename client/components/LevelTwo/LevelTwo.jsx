import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './level-two.css'
import {resetFinal} from '../../actions/final'
import {setLevels} from '../../actions/set-levels'
import {addSelection} from '../../actions/selections'
import {setPreviousLevel} from '../../actions/previous-level'

import {setLevelTwo} from '../../actions/level-two'
import {setLevelThree} from '../../actions/level-three'
import {resetLevelFourActive} from '../../actions/level-four'
import {resetLevelFiveActive} from '../../actions/level-five'
import {resetLevelSixActive} from '../../actions/level-six'
import {resetLevelSevenActive} from '../../actions/level-seven'
import {resetLevelEightActive} from '../../actions/level-eight'

class LevelTwo extends React.Component {
  levelProceed (incomingLevel, selectedLevel, prev, option) {
    let finalCheck = false
    if (!incomingLevel) {
      return true
    } else if (incomingLevel[0].options[0].responses === false) {
      finalCheck = true
      this.props.dispatch(addSelection([
        this.props.selections[0],
        option.title,
        incomingLevel[0].options[0].title
      ]))
      this.props.dispatch(setLevels(finalCheck, 2, selectedLevel, incomingLevel, prev))
    } else {
      this.props.dispatch(addSelection([
        this.props.selections[0],
        option.title
      ]))
      this.props.dispatch(setLevels(finalCheck, 2, selectedLevel, incomingLevel, prev))
    }
  }

  resetSelections (newTitle) {
    let newSelections = [this.props.levelOne[0].options[0].title, newTitle]
    this.props.dispatch(addSelection(newSelections))
  }

  handleClick (e, option) {
    let targetId = e.target.id
    let currentLevelData = this.props.levelTwo
    let selectedLevel = this.props.markSelected(targetId, currentLevelData)
    let reachedLevel = this.props.findActiveLevel()
    let levelDifference = reachedLevel - 4
    let incomingLevel = option.responses
    let finalClick = this.props.checkIfFinalClick(incomingLevel)
    let prev = {
      levelOne: this.props.levelOne,
      levelTwo: this.props.levelTwo,
      levelThree: false,
      levelFour: false,
      levelFive: false,
      levelSix: false,
      levelSeven: false,
      levelEight: false,
      previousLevel: false,
      final: false,
      selections: [this.props.selections[0]]
    }
    let zoomDiv = document.getElementById('pathfinder-app')
    zoomDiv.style.overflow = 'scroll'
    zoomDiv.style.transformOrigin = 'left'
    zoomDiv.style.transform = 'scaleX(1) scaleY(1)'
    if (option.selected === 'selected' && finalClick && this.props.final) {
      return true
    } else if (option.selected === 'notSelected' && finalClick && this.props.final) {
      this.resetSelections(option.title)
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelTwo(selectedLevel))
      this.props.dispatch(setLevelThree(option.responses))
      this.props.dispatch(resetLevelFourActive())
      this.props.dispatch(resetLevelFiveActive())
      this.props.dispatch(resetLevelSixActive())
      this.props.dispatch(resetLevelSevenActive())
      this.props.dispatch(resetLevelEightActive())
    } else if (option.selected !== 'unassigned' && !finalClick) {
      this.resetSelections(option.title)
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelTwo(selectedLevel))
      this.props.dispatch(setLevelThree(option.responses))
      this.props.dispatch(resetLevelFourActive())
      this.props.dispatch(resetLevelFiveActive())
      this.props.dispatch(resetLevelSixActive())
      this.props.dispatch(resetLevelSevenActive())
      this.props.dispatch(resetLevelEightActive())
      this.props.dispatch(resetFinal())
      if (levelDifference > 0) {
        setTimeout(() => this.props.shiftRight(levelDifference), 100)
      }
    } else {
      this.levelProceed(incomingLevel, selectedLevel, prev, option)
    }
  }

  render () {
    return (
      <CSSTransition
        classNames = 'level-ani'
        in = {this.props.levelTwoActive}
        timeout = {3000}
        component = {null}
        mountOnEnter
        unmountOnExit
      >
        <div className = 'levelTwo level'>
          {this.props.levelTwoActive && this.props.levelTwo.map((section) => {
            return (
              <div className = 'label-cont' key = {uuid()}>
                <p className = 'label'>
                  {section.label}
                </p>
                <div className = 'options-cont'>
                  {section.options.map((option) => {
                    return (
                      <div className = {`box ${option.selected}`} id = {option.id} value = {option} onClick = {(e) => this.handleClick(e, option)} key={option.id}>
                        <p className = 'title'>
                          {option.title}
                        </p>
                        <p className = 'description'>
                          {option.description}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </CSSTransition>
    )
  }
}

function mapStateToProps (state) {
  return {
    selections: state.selections,
    previousLevel: state.previousLevel,
    levelOne: state.levelOne,
    levelTwo: state.levelTwo,
    levelTwoActive: state.levelTwoActive,
    final: state.final
  }
}

export default connect(mapStateToProps)(LevelTwo)
