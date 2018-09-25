import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './level-seven.css'
import {resetFinal} from '../../actions/final'
import {setLevels} from '../../actions/set-levels'
import {addSelection} from '../../actions/selections'
import {setPreviousLevel} from '../../actions/previous-level'
import {setLevelSeven} from '../../actions/level-seven'
import {setLevelEight} from '../../actions/level-eight'

class LevelSeven extends React.Component {
  levelProceed (incomingLevel, selectedLevel, prev, option) {
    let finalCheck = false
    if (!incomingLevel) {
      return true
    } else if (incomingLevel[0].options[0].responses === false) {
      finalCheck = true
      this.props.dispatch(addSelection([
        this.props.selections[0],
        this.props.selections[1],
        this.props.selections[2],
        this.props.selections[3],
        this.props.selections[4],
        this.props.selections[5],
        option.title,
        incomingLevel[0].options[0].title
      ]))
      this.props.dispatch(setLevels(finalCheck, 7, selectedLevel, incomingLevel, prev))
      setTimeout(() => this.props.shiftLeft(2), 100)
    } else {
      this.props.dispatch(addSelection([
        this.props.selections[0],
        this.props.selections[1],
        this.props.selections[2],
        this.props.selections[3],
        this.props.selections[4],
        this.props.selections[5],
        option.title
      ]))
      this.props.dispatch(setLevels(finalCheck, 7, selectedLevel, incomingLevel, prev))
      setTimeout(() => this.props.shiftLeft(4), 100)
    }
  }

  resetSelections (newTitle) {
    let newSelections = [
      this.props.selections[0],
      this.props.selections[1],
      this.props.selections[2],
      this.props.selections[3],
      this.props.selections[4],
      this.props.selections[5],
      newTitle
    ]
    this.props.dispatch(addSelection(newSelections))
  }

  handleClick (e, option) {
    let targetId = e.target.id
    let currentLevelData = this.props.levelSeven
    let selectedLevel = this.props.markSelected(targetId, currentLevelData)
    let reachedLevel = this.props.findActiveLevel()
    let levelDifference = reachedLevel - 4
    let incomingLevel = option.responses
    let finalClick = this.props.checkIfFinalClick(incomingLevel)
    let zoomDiv = document.getElementById('pathfinder-app')
    zoomDiv.style.overflow = 'scroll'
    zoomDiv.style.transformOrigin = 'left'
    zoomDiv.style.transform = 'scaleX(1) scaleY(1)'
    let prev = {
      levelOne: this.props.levelOne,
      levelTwo: this.props.levelTwo,
      levelThree: this.props.levelThree,
      levelFour: this.props.levelFour,
      levelFive: this.props.levelFive,
      levelSix: this.props.levelSix,
      levelSeven: false,
      levelEight: false,
      previousLevel: false,
      final: false,
      selections: [
        this.props.selections[0],
        this.props.selections[1],
        this.props.selections[2],
        this.props.selections[3],
        this.props.selections[4],
        this.props.selections[5]
      ]
    }
    if (option.selected === 'selected' && finalClick) {
      return true
    } else if (option.selected === 'notSelected' && finalClick) {
      this.resetSelections(option.title)
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelSeven(selectedLevel))
      this.props.dispatch(setLevelEight(option.responses))
    } else if (option.selected !== 'unassigned' && !finalClick) {
      this.props.dispatch(resetFinal())
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelSeven(selectedLevel))
      this.props.dispatch(setLevelEight(option.responses))
      if (levelDifference > 0) {
        setTimeout(() => this.props.shiftRight(levelDifference), 100)
      }
    } else {
      this.props.dispatch(resetFinal())
      this.levelProceed(option.responses, selectedLevel, prev, option)
    }
  }
  render () {
    return (
      <CSSTransition
        classNames = 'level-ani'
        in = {this.props.levelSevenActive}
        timeout = {3000}
        component = {null}
        mountOnEnter
        unmountOnExit
      >
        <div className = 'levelSeven level'>
          {this.props.levelSeven && this.props.levelSeven.map((section) => {
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
    levelFive: state.levelFive,
    levelSix: state.levelSix,
    levelSeven: state.levelSeven,
    levelSevenActive: state.levelSevenActive,
    final: state.final
  }
}

export default connect(mapStateToProps)(LevelSeven)
