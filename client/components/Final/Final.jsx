import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './final.css'

class Final extends React.Component {
  findFinal () {
    if (this.props.selections.length === 3) {
      return this.props.levelFour
    } else if (this.props.selections.length === 4) {
      return this.props.levelFive
    } else if (this.props.selections.length === 5) {
      return this.props.levelSix
    } else if (this.props.selections.length === 6) {
      return this.props.levelSeven
    } else if (this.props.selections.length === 7) {
      return this.props.levelEight
    }
  }
  render () {
    let finalSelection = this.findFinal()
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
          {this.props.selections.map(choice => {
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
                {this.props.final && finalSelection[0].options[0].responses[0].options[0].title}
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
