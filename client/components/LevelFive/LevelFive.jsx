import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './level-five.css'

class LevelFive extends React.Component {
  render () {
    return (
      <CSSTransition
        classNames = 'level-ani'
        in = {this.props.levelFiveActive}
        timeout = {3000}
        component = {null}
        mountOnEnter
        unmountOnExit
      >
        <div className = 'levelFive level'>
          {this.props.levelFive && this.props.levelFive.map((section) => {
            return (
              <div className = 'label-cont' key = {uuid()}>
                <p className = 'label'>
                  {section.label}
                </p>
                <div className = 'options-cont'>
                  {section.options.map((option) => {
                    return (
                      <div className = {`box ${option.selected}`} id = {option.id} value = {option} onClick = {(e) => this.props.click(e, option)} key={option.id}>
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
    levelFive: state.levelFive,
    levelFiveActive: state.levelFiveActive
  }
}

export default connect(mapStateToProps)(LevelFive)
