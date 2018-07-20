import uuid from 'uuid'
import React from 'react'

import './pathfinder.css'

import {baseLevel} from '../../data/path-data'

class Pathfinder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      active: false,
      levelOne: [{
        label: '',
        options: [
          {
            title: 'RETAIL ASSISTANT',
            description: 'YOUR FRIENDLY STORE ASSISTANT',
            id: 100,
            selected: 'selected',
            responses: null
          }
        ]
      }],
      levelTwo: baseLevel,
      levelThree: false,
      levelFour: false,
      final: false
    }
    // this.makeMove = this.makeMove.bind(this)
    // this.makeFadeIn = this.makeFadeIn.bind(this)
    // this.setOpacity = this.setOpacity.bind(this)
    // this.makeFadeOut = this.makeFadeOut.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.markSelected = this.markSelected.bind(this)
    this.levelProceed = this.levelProceed.bind(this)
    // this.getRelativeTop = this.getRelativeTop.bind(this)
    // this.getRelativeLeft = this.getRelativeLeft.bind(this)
  }

  componentDidMount () {
    this.setState({
      active: false,
      levelOne: [{
        label: '',
        options: [
          {
            title: 'RETAIL ASSISTANT',
            description: 'YOUR FRIENDLY STORE ASSISTANT',
            id: 100,
            selected: 'selected',
            responses: null
          }
        ]
      }],
      levelTwo: baseLevel,
      levelThree: false,
      levelFour: false,
      final: false
    })
  }

  // getRelativeLeft (currentOffsetLeft, clickedOffsetLeft) {
  //   return currentOffsetLeft - clickedOffsetLeft
  // }
  // getRelativeTop (currentOffsetTop, clickedOffsetTop) {
  //   return currentOffsetTop - clickedOffsetTop
  // }

  // // makeMove (element) {
  // //   const bodyRect = document.body.getBoundingClientRect()
  // //   const currentBox = document.getElementById('current-box')
  // //   const currentRect = currentBox.getBoundingClientRect()
  // //   const currentMid = currentBox.offsetHeight / 2
  // //   const currentOffsetTop = currentRect.top - bodyRect.top
  // //   const currentOffsetLeft = currentRect.left - bodyRect.left
  // //   const clickedElement = document.getElementById(`${element.target.id}`)
  // //   const clickedMid = clickedElement.offsetHeight / 2
  // //   const clickedElementRect = clickedElement.getBoundingClientRect()
  // //   const clickedOffsetTop = clickedElementRect.top - bodyRect.top
  // //   const clickedOffsetLeft = clickedElementRect.left - bodyRect.left
  // //   const newTop = (currentMid + currentOffsetTop) - clickedMid
  // //   if (window.innerWidth > 600) {
  // //     clickedElement.style.positionTop = clickedOffsetTop + 'px'
  // //     clickedElement.style.positionLeft = clickedOffsetLeft + 'px'
  // //     clickedElement.style.position = 'relative'
  // //     clickedElement.style.transform = `translate3d(${this.getRelativeLeft(currentOffsetLeft, clickedOffsetLeft)}px, ${this.getRelativeTop(newTop, clickedOffsetTop)}px, 0)`
  // //     clickedElement.style.backgroundColor = featuredBoxBackgroundColor
  // //     clickedElement.style.color = featuredBoxTextColor
  // //     clickedElement.style.transition = 'all 1.5s ease-in-out'
  // //   } else {
  // //     clickedElement.style.positionTop = clickedOffsetTop + 'px'
  // //     clickedElement.style.positionLeft = clickedOffsetLeft + 'px'
  // //     clickedElement.style.position = 'relative'
  // //     clickedElement.style.transform = `translate3d(${this.getRelativeLeft(currentOffsetLeft, clickedOffsetLeft)}px, ${this.getRelativeTop(currentOffsetTop, clickedOffsetTop)}px, 0)`
  // //     clickedElement.style.backgroundColor = featuredBoxBackgroundColor
  // //     clickedElement.style.color = featuredBoxTextColor
  // //     clickedElement.style.transition = 'all 1.5s ease-in-out'
  // //   }
  // // }

  // makeFadeOut (element) {
  //   const labels = document.querySelectorAll('.label')
  //   const currentBox = document.getElementById('current-box')
  //   const listItemConts = document.querySelectorAll('.single-option-cont')
  //   currentBox.style.opacity = 0
  //   currentBox.style.transition = 'opacity 1.1s ease-in-out'
  //   labels.forEach(label => {
  //     label.style.opacity = 0
  //     label.style.transition = 'opacity 1.1s ease-in-out'
  //   })
  //   listItemConts.forEach(cont => {
  //     if (cont.id !== element) {
  //       cont.style.opacity = 0
  //       cont.style.transition = 'opacity 1.1s ease-in-out'
  //     }
  //   })
  // }

  // setOpacity () {
  //   const currentBox = document.getElementById('current-box')
  //   const listCont = document.getElementById('options-body-cont')
  //   currentBox.style.opacity = 1
  //   currentBox.style.transition = 'none'
  //   if (listCont) {
  //     listCont.style.opacity = 0
  //   }
  // }

  // makeFadeIn () {
  //   const listCont = document.getElementById('options-body-cont')
  //   if (listCont) {
  //     listCont.style.opacity = 1
  //     listCont.style.transition = 'opacity 1.1s ease-in-out'
  //   }
  // }
  markSelected (id, level) {
    let newLevel = level
    for (let i = 0; i < newLevel.length; i++) {
      for (let j = 0; j < newLevel[i].options.length; j++) {
        if (newLevel[i].options[j].id === Number(id)) {
          newLevel[i].options[j].selected = 'selected'
        } else {
          newLevel[i].options[j].selected = 'notSelected'
        }
      }
    }
    return newLevel
  }

  levelProceed (incomingLevel, selectedLevel) {
    if (incomingLevel[0].options[0].responses === false) {
      this.setState({
        active: true,
        levelOne: this.state.levelTwo,
        levelTwo: this.state.levelThree,
        levelThree: selectedLevel,
        levelFour: incomingLevel,
        final: true
      })
    } else if (!this.state.levelThree) {
      this.setState({
        active: true,
        levelOne: [{
          label: '',
          options: [
            {
              title: 'RETAIL ASSISTANT',
              description: 'YOUR FRIENDLY STORE ASSISTANT',
              id: 100,
              selected: 'selected',
              responses: null
            }
          ]
        }],
        levelTwo: selectedLevel,
        levelThree: incomingLevel,
        levelFour: false,
        final: false
      })
    } else if (!this.state.levelFour) {
      this.setState({
        active: true,
        levelOne: [{
          label: '',
          options: [
            {
              title: 'RETAIL ASSISTANT',
              description: 'YOUR FRIENDLY STORE ASSISTANT',
              id: 100,
              selected: 'selected',
              responses: null
            }
          ]
        }],
        levelTwo: baseLevel,
        levelThree: selectedLevel,
        levelFour: incomingLevel,
        final: false
      })
    } else if (this.state.levelThree && this.state.levelFour) {
      this.setState({
        iactive: true,
        levelOne: this.state.levelTwo,
        levelTwo: this.state.levelThree,
        levelThree: selectedLevel,
        levelFour: incomingLevel,
        final: false
      })
    }
  }

  handleClick (e, option) {
    if (option.selected !== 'unassigned') {
      return
    }
    let targetId = e.target.id
    let currentLevelData = null
    if (!this.state.levelThree) {
      currentLevelData = this.state.levelTwo
    } else if (this.state.levelThree && !this.state.levelFour) {
      currentLevelData = this.state.levelThree
    } else if (this.state.levelFour) {
      currentLevelData = this.state.levelFour
    }
    let selectedLevel = this.markSelected(targetId, currentLevelData)
    this.levelProceed(option.responses, selectedLevel)
  }

  render () {
    return (
      <div className = 'pathfinder-app' id = 'pathfinder-app'>

        <div className = 'levelOne level'>
          {this.state.levelOne.map((section) => {
            return (
              <div className = 'label-cont' key = {uuid()}>
                <p className = 'label'>
                  {section.label}
                </p>
                <div className = 'options-cont'>
                  {section.options.map((option) => {
                    return (
                      <div className = {`box ${option.selected}`} id = {option.id} value = {option} onClick = {(e) => this.handleClick(e, option)} key={option.id}>
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

        <div className = 'levelTwo level'>
          {this.state.levelTwo.map((section) => {
            return (
              <div className = 'label-cont' key = {uuid()}>
                <p className = 'label'>
                  {section.label}
                </p>
                <div className = 'options-cont'>
                  {section.options.map((option) => {
                    return (
                      <div className = {`box ${option.selected}`} id = {option.id} value = {option} onClick = {(e) => this.handleClick(e, option)} key={option.id}>
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

        <div className = 'levelThree level'>
          {this.state.levelThree && this.state.levelThree.map((section) => {
            return (
              <div className = 'label-cont' key = {uuid()}>
                <p className = 'label'>
                  {section.label}
                </p>
                <div className = 'options-cont'>
                  {section.options.map((option) => {
                    return (
                      <div className = {`box ${option.selected}`} id = {option.id} value = {option} onClick = {(e) => this.handleClick(e, option)} key={option.id}>
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
        {!this.state.final
          ? <div className = 'levelFour level'>
            {this.state.levelFour && this.state.levelFour.map((section) => {
              return (
                <div className = 'label-cont' key = {uuid()}>
                  <p className = 'label'>
                    {section.label}
                  </p>
                  <div className = 'options-cont'>
                    {section.options.map((option) => {
                      return (
                        <div className = {`box ${option.selected}`} id = {option.id} value = {option} onClick = {(e) => this.handleClick(e, option)} key={option.id}>
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

          : <div className = 'levelFour level'>
            {this.state.levelFour && this.state.levelFour.map((section) => {
              return (
                <div className = 'label-cont' key = {uuid()}>
                  <p className = 'label'>
                    {section.label}
                  </p>
                  <div className = 'options-cont'>
                    {section.options.map((option) => {
                      return (
                        <div className = {`box ${option.selected}`} id = {option.id} value = {option} onClick = {(e) => this.handleClick(e, option)} key={option.id}>
                          <p className = 'title'>
                            {option.title}
                          </p>
                          <p className = 'description'>
                            {option.description}
                          </p>
                        </div>
                      )
                    })}
                    <h1>
                          Final
                    </h1>
                  </div>
                </div>
              )
            })}
          </div>}

      </div>
    )
  }
}

export default Pathfinder
