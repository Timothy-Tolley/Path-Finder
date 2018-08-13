import uuid from 'uuid'
import React from 'react'
import {connect} from 'react-redux'

import './level-one.css'

class LevelOne extends React.Component {
  render () {
    return (
      <div className = 'levelOne level'>
        {this.props.levelOne.map(section => {
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
      </div>)
  }
}

function mapStateToProps (state) {
  return {
    levelOne: state.levelOne
  }
}

export default connect(mapStateToProps)(LevelOne)
