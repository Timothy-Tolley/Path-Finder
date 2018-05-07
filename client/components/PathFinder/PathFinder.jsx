import React from 'react'

import './pathfinder.css'

import {baseLevel} from '../../data/path-data'

class Pathfinder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSelection: {
        title: 'RETAIL ASSISTANT',
        description: 'YOUR FRIENDLY STORE ASSISTANT'
      },
      options: baseLevel
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (object) {
    this.setState({
      currentSelection: {
        title: object.title,
        description: object.description
      },
      options: object.responses
    })
  }

  render () {
    return (
      <div className = 'pathfinder-app'>
        <div className = 'current-cont'>
          <div className = 'current-box featured-box'>
            <p className = 'title'>
              {this.state.currentSelection.title}
            </p>
            <p className = 'description'>
              {this.state.currentSelection.description}
            </p>
          </div>
        </div>
        <div className = 'options-body-cont'>
          {this.state.options.map((section, idx) => {
            return (
              <div className = 'single-label-cont' key = {idx}>
                <div className = 'labels-cont'>
                  <p className = 'label'>
                    {section.label}
                  </p>
                </div>
                <div className = 'options-cont'>
                  {section.options.map((option, idx) => {
                    return (
                      <div className = 'single-option-cont options-box' key = {idx} value = {option} onClick = {(e) => this.handleClick(option)}>
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
      </div>
    )
  }
}

export default Pathfinder
