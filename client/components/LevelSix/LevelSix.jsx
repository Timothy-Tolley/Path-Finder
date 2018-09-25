import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './level-six.css'
import {resetFinal} from '../../actions/final'
import {setLevels} from '../../actions/set-levels'
import {addSelection} from '../../actions/selections'
import {setPreviousLevel} from '../../actions/previous-level'
import {setLevelSix} from '../../actions/level-six'
import {setLevelSeven} from '../../actions/level-seven'
import {resetLevelEightActive} from '../../actions/level-eight'

class LevelSix extends React.Component {
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
        option.title,
        incomingLevel[0].options[0].title
      ]))
      this.props.dispatch(setLevels(finalCheck, 6, selectedLevel, incomingLevel, prev))
      setTimeout(() => this.props.shiftLeft(2), 100)
    } else {
      this.props.dispatch(addSelection([
        this.props.selections[0],
        this.props.selections[1],
        this.props.selections[2],
        this.props.selections[3],
        this.props.selections[4],
        option.title
      ]))
      this.props.dispatch(setLevels(finalCheck, 6, selectedLevel, incomingLevel, prev))
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
      newTitle
    ]
    this.props.dispatch(addSelection(newSelections))
  }

  findDifference (reachedLevel, incomingFinal) {
    if (this.props.final && !incomingFinal) {
      return reachedLevel - 6
    } else {
      return 0
    }
  }

  handleClick (e, option) {
    let targetId = e.target.id
    let currentLevelData = this.props.levelSix
    let selectedLevel = this.props.markSelected(targetId, currentLevelData)
    let reachedLevel = this.props.findActiveLevel()
    let incomingLevel = option.responses
    let finalClick = this.props.checkIfFinalClick(incomingLevel)
    let levelDifference = this.findDifference(reachedLevel, finalClick)
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
        this.props.selections[4]
      ]
    }
    let zoomDiv = document.getElementById('pathfinder-app')
    zoomDiv.style.overflow = 'scroll'
    zoomDiv.style.transformOrigin = 'left'
    zoomDiv.style.transform = 'scaleX(1) scaleY(1)'
    if (option.selected === 'selected' && finalClick && this.props.final) {
      return true
    } else if (option.selected === 'notSelected' && finalClick && this.props.final) {
      this.props.dispatch(addSelection([
        this.props.selections[0],
        this.props.selections[1],
        this.props.selections[2],
        this.props.selections[3],
        this.props.selections[4],
        option.title,
        incomingLevel[0].options[0].title
      ]))
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelSix(selectedLevel))
      this.props.dispatch(setLevelSeven(option.responses))
      this.props.dispatch(resetLevelEightActive())
    } else if (option.selected !== 'unassigned' && !finalClick) {
      this.props.dispatch(resetFinal())
      this.resetSelections(option.title)
      this.props.dispatch(setPreviousLevel(prev))
      this.props.dispatch(setLevelSix(selectedLevel))
      this.props.dispatch(setLevelSeven(option.responses))
      this.props.dispatch(resetLevelEightActive())
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
        in = {this.props.levelSixActive}
        timeout = {3000}
        mountOnEnter
        unmountOnExit
      >
        <div className = 'levelSix level'>
          {this.props.levelSix && this.props.levelSix.map((section) => {
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
    levelSixActive: state.levelSixActive,
    final: state.final
  }
}

export default connect(mapStateToProps)(LevelSix)
