import uuid from 'uuid'
import React from 'react'
import {CSSTransition} from 'react-transition-group'

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
    // this.makeShift = this.makeShift.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.markSelected = this.markSelected.bind(this)
    this.levelProceed = this.levelProceed.bind(this)
  }

  componentDidMount () {
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
      levelThree: false,
      levelFour: false,
      final: false
    })
  }

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
        active: true,
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
      <CSSTransition
        classNames = 'move-fade'
        in = {this.state.active}
        timeout = {4000}
        component = {null}
        mountOnEnter
        unmountOnExit
      >
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
      </CSSTransition >
    )
  }
}

export default Pathfinder
