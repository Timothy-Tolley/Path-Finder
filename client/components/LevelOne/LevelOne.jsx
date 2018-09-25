import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'

import './level-one.css'

import {resetFinal} from '../../actions/final'
import {setLevels} from '../../actions/set-levels'
import {addSelection} from '../../actions/selections'
import {setPreviousLevel} from '../../actions/previous-level'

import {setLevelOne} from '../../actions/level-one'
import {setLevelTwo} from '../../actions/level-two'
import {resetLevelThreeActive} from '../../actions/level-three'
import {resetLevelFourActive} from '../../actions/level-four'
import {resetLevelFiveActive} from '../../actions/level-five'
import {resetLevelSixActive} from '../../actions/level-six'
import {resetLevelSevenActive} from '../../actions/level-seven'
import {resetLevelEightActive} from '../../actions/level-eight'

class LevelOne extends React.Component {
  levelProceed (incomingLevel, selectedLevel, prev, option) {
    let finalCheck = false
    if (incomingLevel[0].options[0].responses === false) {
      finalCheck = true
      this.props.dispatch(addSelection([
        this.props.selections[0],
        option.title,
        incomingLevel[0].options[0].title
      ]))
      this.props.dispatch(setLevels(finalCheck, 1, selectedLevel, incomingLevel, prev))
    } else {
      this.props.dispatch(addSelection([
        this.props.selections[0],
        option.title
      ]))
      this.props.dispatch(setLevels(finalCheck, 1, selectedLevel, incomingLevel, prev))
    }
  }

  resetSelections (newTitle) {
    let newSelections = [newTitle]
    this.props.dispatch(addSelection(newSelections))
  }

  handleClick (e, option) {
    let targetId = e.target.id
    let currentLevelData = this.props.levelOne
    let selectedLevel = this.props.markSelected(targetId, currentLevelData)
    let reachedLevel = this.props.findActiveLevel()
    let levelDifference = reachedLevel - 4
    let incomingLevel = option.responses
    let prev = {
      levelOne: this.props.levelOne,
      levelTwo: false,
      levelThree: false,
      levelFour: false,
      levelFive: false,
      levelSix: false,
      levelSeven: false,
      levelEight: false,
      previousLevel: false,
      final: false,
      selections: []
    }
    let zoomDiv = document.getElementById('pathfinder-app')
    zoomDiv.style.overflow = 'scroll'
    zoomDiv.style.transformOrigin = 'left'
    zoomDiv.style.transform = 'scaleX(1) scaleY(1)'
    if (option.selected !== 'unassigned') {
      this.resetSelections(option.title)
      this.props.dispatch(resetFinal())
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelOne(selectedLevel))
      this.props.dispatch(setLevelTwo(option.responses))
      this.props.dispatch(resetLevelThreeActive())
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
      <div className = 'levelOne level'>
        {this.props.levelOne.map(section => {
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
    levelOne: state.levelOne
  }
}

export default connect(mapStateToProps)(LevelOne)
