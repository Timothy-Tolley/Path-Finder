import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './level-three.css'

class LevelThree extends React.Component {
  render () {
    return (
      <CSSTransition
        classNames = 'level-ani'
        in = {this.props.levelThreeActive}
        timeout = {3000}
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
    levelThree: state.levelThree,
    levelThreeActive: state.levelThreeActive
  }
}

export default connect(mapStateToProps)(LevelThree)
