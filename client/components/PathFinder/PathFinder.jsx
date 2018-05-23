import uuid from 'uuid'
import React from 'react'
import {CSSTransition} from 'react-transition-group'

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
      listActive: false
    }
    this.makeMove = this.makeMove.bind(this)
    this.makeFadeIn = this.makeFadeIn.bind(this)
    this.setOpacity = this.setOpacity.bind(this)
    this.makeFadeOut = this.makeFadeOut.bind(this)
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
      listActive: true
    })
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
    if (window.innerWidth > 600) {
      clickedElement.style.positionTop = clickedOffsetTop + 'px'
      clickedElement.style.positionLeft = clickedOffsetLeft + 'px'
      clickedElement.style.position = 'relative'
      clickedElement.style.transform = `translate3d(${this.getRelativeLeft(currentOffsetLeft, clickedOffsetLeft)}px, ${this.getRelativeTop(newTop, clickedOffsetTop)}px, 0)`
      clickedElement.style.backgroundColor = featuredBoxBackgroundColor
      clickedElement.style.color = featuredBoxTextColor
      // MOVEMENT ANIMATION SPEED A
      // IF YOU CHANGE THIS BY 1 SEC
      clickedElement.style.transition = 'all 1.5s ease-in-out'
    } else {
      clickedElement.style.positionTop = clickedOffsetTop + 'px'
      clickedElement.style.positionLeft = clickedOffsetLeft + 'px'
      clickedElement.style.position = 'relative'
      clickedElement.style.transform = `translate3d(${this.getRelativeLeft(currentOffsetLeft, clickedOffsetLeft)}px, ${this.getRelativeTop(currentOffsetTop, clickedOffsetTop)}px, 0)`
      clickedElement.style.backgroundColor = featuredBoxBackgroundColor
      clickedElement.style.color = featuredBoxTextColor
      // MOVEMENT ANIMATION SPEED B
      // CHANGE THIS THE SAME AS A
      clickedElement.style.transition = 'all 1.5s ease-in-out'
    }
  }

  makeFadeOut (element) {
    const labels = document.querySelectorAll('.label')
    const currentBox = document.getElementById('current-box')
    const listItemConts = document.querySelectorAll('.single-option-cont')
    currentBox.style.opacity = 0
    // FADE OUT SPEED C
    // CHANGE THIS BY APPROX HALF OF A
    currentBox.style.transition = 'opacity 1.1s ease-in-out'
    labels.forEach(label => {
      label.style.opacity = 0
      // FADE OUT SPEED D
      // MAKE SAME A C
      label.style.transition = 'opacity 1.1s ease-in-out'
    })
    listItemConts.forEach(cont => {
      if (cont.id !== element) {
        cont.style.opacity = 0
        // FADE OUT SPEED E
        // MAKE SAME A C
        cont.style.transition = 'opacity 1.1s ease-in-out'
      }
    })
  }

  setOpacity () {
    const currentBox = document.getElementById('current-box')
    const listCont = document.getElementById('options-body-cont')
    currentBox.style.opacity = 1
    currentBox.style.transition = 'none'
    if (listCont) {
      listCont.style.opacity = 0
    }
  }

  makeFadeIn () {
    const listCont = document.getElementById('options-body-cont')
    if (listCont) {
      listCont.style.opacity = 1
      // FADE OUT SPEED F
      // MAKE SAME A C
      listCont.style.transition = 'opacity 1.1s ease-in-out'
    }
  }

  handleClick (e, option) {
    const listCont = document.getElementById('options-body-cont')
    listCont.removeAttribute('style')
    this.makeMove(e)
    let targetId = e.target.id
    this.makeFadeOut(targetId)
    setTimeout(() => {
      this.setOpacity()
      this.setState({
        currentSelection: {
          title: option.title,
          description: option.description
        },
        options: option.responses,
        initialRender: true,
        listActive: true
      })
      // TIMEOUT FOR FADE IN
      // PLAY AROUND WITH THIS BUT CHANGE NEXT LINE BY APPROX SAME AMOUNT
      setTimeout(() => this.makeFadeIn(), 600)
    }, 1800)
  }

  // ALL FURTHER ANIMATIONS IN CSS
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
            <div className = 'box featured-box' id = 'current-box'>
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
            <div className = 'options-body-cont fade-in-move' id = 'options-body-cont'>
              {this.state.listActive && this.state.options.map((section) => {
                return (
                  <div className = 'single-label-cont' key = {uuid()}>
                    <div className = 'labels-cont'>
                      <p className = 'label'>
                        {section.label}
                      </p>
                    </div>
                    <div className = 'options-cont'>
                      {section.options.map((option) => {
                        return (
                          <div className = 'single-option-cont options-box box' id = {option.id} value = {option} onClick = {(e) => this.handleClick(e, option)} key={option.id}>
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
