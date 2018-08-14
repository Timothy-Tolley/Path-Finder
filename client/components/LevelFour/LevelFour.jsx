import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './level-four.css'
import {resetFinal} from '../../actions/final'
import {setLevels} from '../../actions/set-levels'
import {addSelection} from '../../actions/selections'
import {setPreviousLevel} from '../../actions/previous-level'
import {setLevelFour} from '../../actions/level-four'
import {setLevelFive} from '../../actions/level-five'
import {resetLevelSixActive} from '../../actions/level-six'
import {resetLevelSevenActive} from '../../actions/level-seven'
import {resetLevelEightActive} from '../../actions/level-eight'

class LevelFour extends React.Component {
  levelProceed (incomingLevel, selectedLevel, prev, option) {
    let finalCheck = false
    if (incomingLevel[0].options[0].responses === false) {
      finalCheck = true
      this.props.dispatch(addSelection([
        this.props.selections[0],
        this.props.selections[1],
        this.props.selections[2],
        option.title,
        incomingLevel[0].options[0].title
      ]))
      this.props.dispatch(setLevels(finalCheck, 4, selectedLevel, incomingLevel, prev))
      setTimeout(() => this.props.shiftLeft(2), 100)
    } else {
      this.props.dispatch(addSelection([
        this.props.selections[0],
        this.props.selections[1],
        this.props.selections[2],
        option.title
      ]))
      this.props.dispatch(setLevels(finalCheck, 4, selectedLevel, incomingLevel, prev))
      setTimeout(() => this.props.shiftLeft(4), 100)
    }
  }

  resetSelections (newTitle) {
    let newSelections = [this.props.selections[0], this.props.selections[1], this.props.selections[2], newTitle]
    this.props.dispatch(addSelection(newSelections))
  }

  handleClick (e, option) {
    let targetId = e.target.id
    let currentLevelData = this.props.levelFour
    let selectedLevel = this.props.markSelected(targetId, currentLevelData)
    let reachedLevel = this.props.findActiveLevel()
    let levelDifference = reachedLevel - 4
    let incomingLevel = option.responses
    let finalClick = this.props.checkIfFinalClick(incomingLevel)
    let prev = {
      levelOne: this.props.levelOne,
      levelTwo: this.props.levelTwo,
      levelThree: this.props.levelThree,
      levelFour: this.props.levelFour,
      levelFive: false,
      levelSix: false,
      levelSeven: false,
      levelEight: false,
      previousLevel: false,
      final: false,
      selections: [
        this.props.selections[0],
        this.props.selections[1],
        this.props.selections[2]
      ]
    }
    if (option.selected !== 'unassigned' && finalClick) {
      this.resetSelections(option.title)
      this.props.dispatch(resetFinal())
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelFour(selectedLevel))
      this.props.dispatch(setLevelFive(option.responses))
      this.props.dispatch(resetLevelSixActive())
      this.props.dispatch(resetLevelSevenActive())
      this.props.dispatch(resetLevelEightActive())
      if (levelDifference > 1) {
        setTimeout(() => this.props.shiftRight(levelDifference), 100)
      }
    } else {
      this.levelProceed(option.responses, selectedLevel, prev, option)
    }
  }

  render () {
    return (
      <CSSTransition
        classNames = 'level-ani'
        in = {this.props.levelFourActive}
        timeout = {3000}
        component = {null}
        mountOnEnter
        unmountOnExit
      >
        <div className = 'levelFour level'>
          {this.props.levelFour && this.props.levelFour.map((section) => {
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
    levelThree: state.levelThree,
    levelFour: state.levelFour,
    levelFourActive: state.levelFourActive
  }
}

export default connect(mapStateToProps)(LevelFour)
