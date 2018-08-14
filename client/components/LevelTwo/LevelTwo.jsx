import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'

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
    if (incomingLevel[0].options[0].responses === false) {
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
    if (option.selected !== 'unassigned' && finalClick) {
      this.resetSelections(option.title)
      this.props.dispatch(resetFinal())
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelTwo(selectedLevel))
      this.props.dispatch(setLevelThree(option.responses))
      this.props.dispatch(resetLevelFourActive())
      this.props.dispatch(resetLevelFiveActive())
      this.props.dispatch(resetLevelSixActive())
      this.props.dispatch(resetLevelSevenActive())
      this.props.dispatch(resetLevelEightActive())
      if (levelDifference > 0) {
        setTimeout(() => this.props.shiftRight(levelDifference), 100)
      }
    } else {
      this.levelProceed(incomingLevel, selectedLevel, prev, option)
    }
  }

  render () {
    return (
      <div className = 'levelTwo level'>
        {this.props.levelTwo.map((section) => {
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
    )
  }
}

function mapStateToProps (state) {
  return {
    selections: state.selections,
    levelOne: state.levelOne,
    levelTwo: state.levelTwo
  }
}

export default connect(mapStateToProps)(LevelTwo)
