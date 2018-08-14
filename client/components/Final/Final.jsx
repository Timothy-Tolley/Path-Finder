import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './final.css'

class Final extends React.Component {
  render () {
    // Deep copy of array
    let selections = JSON.parse(JSON.stringify(this.props.selections))
    selections.pop()
    return (
      <CSSTransition
        classNames = 'open'
        in = {this.props.final}
        timeout = {4000}
        component = {null}
        mountOnEnter
        unmountOnExit
      >
        <div className = 'final-cont level'>
          <img src = '/images/rwr-logo.png' alt = 'retailworld recruitment logo' className = 'final-logo'/>
          {selections.map(choice => {
            return (
              <div className = 'final-option-cont' key={uuid()}>
                <div className = 'final-box'>
                  <p className = 'title'>
                    {choice}
                  </p>
                </div>
                <img src = '/images/down-arrow.png' className = 'down-arrow' alt = 'down arrow' />
              </div>
            )
          })}
          <div className = 'final-choice' >
            <div className = 'final-box'>
              <p className = 'title'>
                {this.props.selections[this.props.selections.length - 1]}
              </p>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

function mapStateToProps (state) {
  return {
    levelOne: state.levelOne,
    levelTwo: state.levelTwo,
    levelThree: state.levelThree,
    levelFour: state.levelFour,
    levelFive: state.levelFive,
    levelSix: state.levelSix,
    levelSeven: state.levelSeven,
    levelEight: state.levelEight,
    selections: state.selections,
    final: state.final
  }
}

export default connect(mapStateToProps)(Final)
