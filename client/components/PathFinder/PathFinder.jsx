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

  handleClick (option) {
    this.setState({
      currentSelection: {
        title: option.title,
        description: option.description
      },
      options: option.responses
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
        {this.state.options
          ? <div className = 'options-body-cont'>
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
          : <div className = 'end-message-container'>
            <div className = 'end-message-box'>
              <p className = 'end-main-header'> CONGRATULATIONS!</p>
              <p className = 'end-main-header'> THIS IS AN INDUSTRY LEADING JOB.</p>
              <p className = 'end-secondary-header'> MAKE YOUR DREAM HAPPEN, TALK TO US TODAY </p>
              <img className = 'final-message-img' alt = 'logo image'/>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Pathfinder
