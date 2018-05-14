import uuid from 'uuid'
import React from 'react'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

import './pathfinder.css'

import {baseLevel} from '../../data/path-data'
import {featuredBoxBackgroundColor, featuredBoxTextColor} from '../../data/constants'

class Pathfinder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentSelection: {
        title: 'RETAIL ASSISTANT',
        description: 'YOUR FRIENDLY STORE ASSISTANT'
      },
      options: baseLevel,
      initialRender: false,
      listActive: false,
      itemActive: false
    }
    this.makeMove = this.makeMove.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.getRelativeTop = this.getRelativeTop.bind(this)
    this.getRelativeLeft = this.getRelativeLeft.bind(this)
  }

  componentDidMount () {
    this.setState({
      currentSelection: {
        title: 'RETAIL ASSISTANT',
        description: 'YOUR FRIENDLY STORE ASSISTANT'
      },
      options: baseLevel,
      initialRender: true,
      listActive: true,
      itemActive: true
    })
    // setTimeout(() => this.setState({
    //   currentSelection: {
    //     title: 'RETAIL ASSISTANT',
    //     description: 'YOUR FRIENDLY STORE ASSISTANT'
    //   },
    //   options: baseLevel,
    //   initialRender: true,
    //   listActive: true
    // }), 2100)
  }

  getRelativeLeft (currentOffsetLeft, clickedOffsetLeft) {
    return currentOffsetLeft - clickedOffsetLeft
  }
  getRelativeTop (currentOffsetTop, clickedOffsetTop) {
    return currentOffsetTop - clickedOffsetTop
  }

  makeMove (element) {
    const bodyRect = document.body.getBoundingClientRect()
    const currentBox = document.getElementById('current-box')
    const currentRect = currentBox.getBoundingClientRect()
    const currentMid = currentBox.offsetHeight / 2
    const currentOffsetTop = currentRect.top - bodyRect.top
    const currentOffsetLeft = currentRect.left - bodyRect.left
    const clickedElement = document.getElementById(`${element.target.id}`)
    const clickedMid = clickedElement.offsetHeight / 2
    const clickedElementRect = clickedElement.getBoundingClientRect()
    const clickedOffsetTop = clickedElementRect.top - bodyRect.top
    const clickedOffsetLeft = clickedElementRect.left - bodyRect.left
    const newTop = (currentMid + currentOffsetTop) - clickedMid
    clickedElement.style.positionTop = clickedOffsetTop + 'px'
    clickedElement.style.positionLeft = clickedOffsetLeft + 'px'
    clickedElement.style.position = 'relative'
    clickedElement.style.transform = `translate3d(${this.getRelativeLeft(currentOffsetLeft, clickedOffsetLeft)}px, ${this.getRelativeTop(newTop, clickedOffsetTop)}px, 0)`
    clickedElement.style.backgroundColor = featuredBoxBackgroundColor
    clickedElement.style.color = featuredBoxTextColor
    clickedElement.style.transition = 'all .7s ease-in-out, .5s'
  }

  handleClick (e, option) {
    this.makeMove(e)
    setTimeout(() => {
      this.setState({
        currentSelection: {
          title: option.title,
          description: option.description
        },
        options: option.responses,
        initialRender: true,
        listActive: true,
        itemActive: false
      })
    }, 2200)
  }

  render () {
    return (
      <div className = 'pathfinder-app' id = 'pathfinder-app'>
        <CSSTransition
          classNames = 'move-fade'
          in = {this.state.initialRender}
          timeout = {4000}
          component = {null}
          mountOnEnter
          unmountOnExit
        >
          <div className = 'current-cont'>
            <div className = 'current-box featured-box' id = 'current-box'>
              <p className = 'title'>
                {this.state.currentSelection.title}
              </p>
              <p className = 'description'>
                {this.state.currentSelection.description}
              </p>
            </div>
          </div>
        </CSSTransition>

        {this.state.options
          ? <CSSTransition
            classNames = 'list-fade'
            in = {this.state.listActive}
            timeout = {4000}
            component = {null}
            mountOnEnter
            unmountOnExit
          >
            <div className = 'options-body-cont fade-in-move'>
              {this.state.listActive && this.state.options.map((section) => {
                return (
                  <div className = 'single-label-cont' key = {uuid()} >
                    <div className = 'labels-cont'>
                      <p className = 'label'>
                        {section.label}
                      </p>
                    </div>
                    <div className = 'options-cont'>
                      <TransitionGroup className = 'labels'>
                        {section.options.map((option) => {
                          return (
                            <CSSTransition
                              classNames = 'itemMove'
                              in = {this.state.itemActive}
                              timeout = {2000}
                              component = {null}
                              key={option.id}
                              mountOnEnter
                              unmountOnExit
                            >
                              <div className = 'single-option-cont options-box' id = {option.id} value = {option} onClick = {(e) => this.handleClick(e, option)}>
                                <p className = 'title'>
                                  {option.title}
                                </p>
                                <p className = 'description'>
                                  {option.description}
                                </p>
                              </div>
                            </CSSTransition>
                          )
                        })}
                      </TransitionGroup>
                    </div>
                  </div>

                )
              })}
            </div>
          </CSSTransition>
          : <div className = 'end-message-container' id = 'end-message-container'>
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
