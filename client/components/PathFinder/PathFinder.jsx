import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './pathfinder.css'
import {activeOn} from '../../actions/active'
import {setLevels} from '../../actions/set-levels'

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
        } else {
          newLevel[i].options[j].selected = 'notSelected'
        }
      }
    }
    return newLevel
  }

  shiftLeft () {
    const wordMap = document.getElementById('pathfinder-app')
    wordMap.style.transform = 'translate3d(-25%, 0, 0)'
    wordMap.style.transition = 'all 2s ease-in-out'
  }

  levelProceed (incomingLevel, selectedLevel) {
    let prev = {
      levelOne: this.props.levelOne,
      levelTwo: this.props.levelTwo,
      levelThree: this.props.levelThree,
      levelFour: this.props.levelFour,
      previousLevel: this.props.previousLevel,
      final: false
    }
    if (incomingLevel[0].options[0].responses === false) {
      this.props.dispatch(setLevels(true, this.props.levelTwo, this.props.levelThree, selectedLevel, incomingLevel, prev))
    } else if (this.props.levelThree && this.props.levelFour) {
      this.props.dispatch(setLevels(false, this.props.levelTwo, this.props.levelThree, selectedLevel, incomingLevel, prev))
    } else if (this.props.levelThree && !this.props.levelFour) {
      this.props.dispatch(setLevels(false, false, false, selectedLevel, incomingLevel, prev))
    } else if (!this.props.levelThree && !this.props.levelFour) {
      this.props.dispatch(setLevels(false, false, selectedLevel, incomingLevel, false, prev))
    }
  }

  handleClick (e, option) {
    if (option.selected !== 'unassigned') {
      return
    }
    if (!option.responses) {
      return
    }
    let targetId = e.target.id
    let currentLevelData = null
    if (!this.props.levelThree) {
      currentLevelData = this.props.levelTwo
    } else if (this.props.levelThree && !this.props.levelFour) {
      currentLevelData = this.props.levelThree
    } else if (this.props.levelFour) {
      currentLevelData = this.props.levelFour
    }
    let selectedLevel = this.markSelected(targetId, currentLevelData)
    if (this.props.levelThree && this.props.levelFour) {
      this.shiftLeft()
      setTimeout(() => { this.levelProceed(option.responses, selectedLevel) }, 2000)
    } else { this.levelProceed(option.responses, selectedLevel) }
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

          <div className = 'levelOne level'>
            {this.props.levelOne.map((section) => {
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
          <CSSTransition
            classNames = 'level-ani'
            in = {this.props.levelThreeActive}
            timeout = {4000}
            component = {null}
            mountOnEnter
            unmountOnExit
          >
            <div className = 'levelThree level'>
              {this.props.levelThree && this.props.levelThree.map((section) => {
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

          {/* {!this.props.final
            ?  */}
          <CSSTransition
            classNames = 'level-ani'
            in = {this.props.levelFourActive}
            timeout = {4000}
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

          {/* : <div className = 'levelFour level'>
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
                      <h1>
                          Final
                      </h1>
                    </div>
                  </div>
                )
              })}
            </div>} */}
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
    final: state.final,
    previousLevel: state.previousLevel,
    active: state.active
  }
}

export default connect(mapStateToProps)(Pathfinder)
