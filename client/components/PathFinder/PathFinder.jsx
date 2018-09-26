import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './pathfinder.css'
import {activeOn} from '../../actions/active'

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
  constructor (props) {
    super(props)
    this.state = {
      load: true
    }
  }
  componentDidMount () {
    setTimeout(() => {
      this.setState({load: false})
      this.props.dispatch(activeOn())
    }, 4500)
  }

  findActiveLevel () {
    if (this.props.levelEightActive) {
      return 8
    } else if (this.props.levelSevenActive) {
      return 7
    } else if (this.props.levelSixActive) {
      return 6
    } else if (this.props.levelFiveActive) {
      return 5
    } else if (this.props.levelFourActive) {
      return 4
    } else if (this.props.levelThreeActive) {
      return 3
    } else if (this.props.levelTwoActive) {
      return 2
    } else return 1
  }

  checkIfFinalClick (incomingLevel) {
    if (incomingLevel !== false) {
      let result = false
      incomingLevel[0].options.forEach(option => {
        if (option.responses === false) {
          result = true
        }
      })
      return result
    } else if (incomingLevel === false) {
      return true
    } else return false
  }

  markSelected (id, level) {
    // creates a deep copy of the level so does not directly effect the props
    let newLevel = JSON.parse(JSON.stringify(level))
    for (let i = 0; i < newLevel.length; i++) {
      for (let j = 0; j < newLevel[i].options.length; j++) {
        if (newLevel[i].options[j].id === Number(id)) {
          newLevel[i].options[j].selected = 'selected'
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

  render () {
    return (
      <div className = 'page-container'>
        {this.state.load && <video src = '/images/load.mp4' className = 'load-animation' autoPlay playsInline preload = 'auto' alt = 'load animation' muted/>}
        <CSSTransition
          classNames = 'move-fade'
          in = {this.props.active}
          timeout = {4000}
          component = {null}
          mountOnEnter
          unmountOnExit
        >
          <div className = 'pathfinder-app' id = 'pathfinder-app'>
            <LevelOne
              markSelected = {this.markSelected.bind(this)}
              findActiveLevel = {this.findActiveLevel.bind(this)}
              shiftRight = {this.props.shiftRight.bind(this)}
              shiftLeft = {this.shiftLeft.bind(this)}
              checkIfFinalClick = {this.checkIfFinalClick.bind(this)}
            />
            <LevelTwo
              markSelected = {this.markSelected.bind(this)}
              findActiveLevel = {this.findActiveLevel.bind(this)}
              shiftRight = {this.props.shiftRight.bind(this)}
              shiftLeft = {this.shiftLeft.bind(this)}
              checkIfFinalClick = {this.checkIfFinalClick.bind(this)}
            />
            <LevelThree
              markSelected = {this.markSelected.bind(this)}
              findActiveLevel = {this.findActiveLevel.bind(this)}
              shiftRight = {this.props.shiftRight.bind(this)}
              shiftLeft = {this.shiftLeft.bind(this)}
              checkIfFinalClick = {this.checkIfFinalClick.bind(this)}
            />
            <LevelFour
              markSelected = {this.markSelected.bind(this)}
              findActiveLevel = {this.findActiveLevel.bind(this)}
              shiftRight = {this.props.shiftRight.bind(this)}
              shiftLeft = {this.shiftLeft.bind(this)}
              checkIfFinalClick = {this.checkIfFinalClick.bind(this)}
            />
            <LevelFive
              markSelected = {this.markSelected.bind(this)}
              findActiveLevel = {this.findActiveLevel.bind(this)}
              shiftRight = {this.props.shiftRight.bind(this)}
              shiftLeft = {this.shiftLeft.bind(this)}
              checkIfFinalClick = {this.checkIfFinalClick.bind(this)}
            />
            <LevelSix
              markSelected = {this.markSelected.bind(this)}
              findActiveLevel = {this.findActiveLevel.bind(this)}
              shiftRight = {this.props.shiftRight.bind(this)}
              shiftLeft = {this.shiftLeft.bind(this)}
              checkIfFinalClick = {this.checkIfFinalClick.bind(this)}
            />
            <LevelSeven
              markSelected = {this.markSelected.bind(this)}
              findActiveLevel = {this.findActiveLevel.bind(this)}
              shiftRight = {this.props.shiftRight.bind(this)}
              shiftLeft = {this.shiftLeft.bind(this)}
              checkIfFinalClick = {this.checkIfFinalClick.bind(this)}
            />
            <LevelEight />
            <Final />
          </div>
        </CSSTransition >
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    levelOne: state.levelOne,
    levelTwo: state.levelTwo,
    levelTwoActive: state.levelTwoActive,
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
