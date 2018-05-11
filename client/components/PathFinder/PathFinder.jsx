import React from 'react'

import './pathfinder.css'

import {baseLevel} from '../../data/path-data'
import {featuredBoxColor, featuredBoxTextColor} from '../../data/constants'

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
    this.makeMove = this.makeMove.bind(this)
    this.makeHidden = this.makeHidden.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.makeVisible = this.makeVisible.bind(this)
    this.getRelativeTop = this.getRelativeTop.bind(this)
    this.getRelativeLeft = this.getRelativeLeft.bind(this)
  }

  componentDidMount () {
    setTimeout(this.makeVisible, 500)
  }

  componentDidUpdate () {
    setTimeout(this.makeVisible, 300)
  }

  makeHidden () {
    document.getElementById('pathfinder-app').style.opacity = 0
  }

  makeVisible () {
    document.getElementById('pathfinder-app').style.opacity = 1
  }

  getRelativeLeft (currentOffsetLeft, clickedOffsetLeft) {
    return currentOffsetLeft - clickedOffsetLeft
  }
  getRelativeTop (currentOffsetTop, clickedOffsetTop) {
    return currentOffsetTop - clickedOffsetTop
  }

  makeMove (elementId) {
    const bodyRect = document.body.getBoundingClientRect()
    const currentRect = document.getElementById('current-box').getBoundingClientRect()
    const currentOffsetTop = currentRect.top - bodyRect.top
    const currentOffsetLeft = currentRect.left - bodyRect.left
    const clickedElement = document.getElementById(`${elementId}`)
    const clickedElementRect = clickedElement.getBoundingClientRect()
    const clickedOffsetTop = clickedElementRect.top - bodyRect.top
    const clickedOffsetLeft = clickedElementRect.left - bodyRect.left
    clickedElement.style.positionTop = clickedOffsetTop + 'px'
    clickedElement.style.positionLeft = clickedOffsetLeft + 'px'
    clickedElement.style.position = 'relative'
    clickedElement.style.transform = `translate3d(${this.getRelativeLeft(currentOffsetLeft, clickedOffsetLeft)}px, ${this.getRelativeTop(currentOffsetTop, clickedOffsetTop)}px, 0)`
    clickedElement.style.backgroundColor = featuredBoxColor
    clickedElement.style.color = featuredBoxTextColor
    clickedElement.style.transition = 'all .7s ease-in-out'
  }

  handleClick (e, option) {
    this.makeMove(e.target.id)
    setTimeout(() => this.makeHidden(), 2000)
    setTimeout(() => this.setState({
      currentSelection: {
        title: option.title,
        description: option.description
      },
      options: option.responses
    }), 3000)
  }

  render () {
    return (
      <div className = 'pathfinder-app' id = 'pathfinder-app'>
        <div className = 'current-cont'>
          <div className = 'current-box featured-box' id ='current-box'>
            <p className = 'title'>
              {this.state.currentSelection.title}
            </p>
            <p className = 'description'>
              {this.state.currentSelection.description}
            </p>
          </div>
        </div>
        <div className = 'options-body-cont'>
          {this.state.options
            ? this.state.options.map((section, idx) => {
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
                        <div className = 'single-option-cont options-box' id = {option.id} key = {idx} value = {option} onClick = {(target) => this.handleClick(target, option)}>
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
            })
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
      </div>
    )
  }
}

export default Pathfinder
