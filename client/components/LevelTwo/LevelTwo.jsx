import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'

import './level-two.css'

class LevelTwo extends React.Component {
  render () {
    return (
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
    )
  }
}

function mapStateToProps (state) {
  return {
    levelTwo: state.levelTwo
  }
}

export default connect(mapStateToProps)(LevelTwo)
