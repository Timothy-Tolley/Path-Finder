import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'
import {CSSTransition} from 'react-transition-group'

import './level-six.css'

class LevelSix extends React.Component {
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
    levelSix: state.levelSix,
    levelSixActive: state.levelSixActive
  }
}

export default connect(mapStateToProps)(LevelSix)
