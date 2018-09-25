import React from 'react'
import {saveAs} from 'file-saver'
import {connect} from 'react-redux'
import html2canvas from 'html2canvas'

import './footer.css'
import {resetLevels} from '../../actions/reset'
import {usePreviousLevel} from '../../actions/previous-level'
import {displayWebAddress, fullWebAddress, phoneNum, email} from '../../data/constants'

class Footer extends React.Component {
  goBack () {
    if (this.props.previousLevel === false) {
      return
    }
    if (this.props.final) {
      this.props.dispatch(usePreviousLevel(this.props.previousLevel))
      this.props.shiftRight(2)
    } else {
      this.props.dispatch(usePreviousLevel(this.props.previousLevel))
      this.props.shiftRight(4)
    }
  }

  reset () {
    this.props.dispatch(resetLevels())
    let shotDiv = document.getElementById('pathfinder-app')
    setTimeout(() => {
      shotDiv.style.overflow = 'scroll'
      shotDiv.style.transformOrigin = 'left'
      shotDiv.style.transform = 'scaleX(1) scaleY(1)'
      this.resetRight()
    }, 2700)
  }

  resetRight () {
    const wordMap = document.getElementById('pathfinder-app')
    wordMap.scrollLeft -= window.innerWidth * 2
  }

  determineScale () {
    if (this.props.levelEightActive) {
      return 0.44
    } else if (this.props.levelSevenActive) {
      return 0.5
    } else if (this.props.levelSixActive) {
      return 0.56
    } else if (this.props.levelFiveActive) {
      return 0.6
    } else if (this.props.levelFourActive) {
      return 0.8
    } else return 1
  }

  screenshot () {
    let scale = this.determineScale()
    let shotDiv = document.getElementById('pathfinder-app')
    shotDiv.style.overflow = 'visible'
    shotDiv.style.transformOrigin = 'left'
    shotDiv.style.transform = `scaleX(${scale}) scaleY(${scale})`
    setTimeout(() => {
      html2canvas(shotDiv).then(function (canvas) {
        canvas.toBlob((blob) => {
          saveAs(blob, 'career-path.png')
        })
      })
    }, 1000)
  }

  render () {
    return (
      <div className = 'footer-bar'>
        <div className = 'footer-text'>
          <div className = 'footer-link-cont'>
            <a href={fullWebAddress} className = 'footer-item footer-link' target='_blank' rel = 'noopener noreferrer'> {displayWebAddress} </a>
          </div>
          <div className = 'footer-link-cont'>
            <a href={`tel:${phoneNum}`} className = 'footer-item footer-link'> {phoneNum} </a>
          </div>
          <div className = 'footer-link-cont'>
            <a href={`mailto:${email}`} className = 'footer-item footer-link'> {email} </a>
          </div>
        </div>
        <div className = 'footer-icons'>
          {/* <div className = 'back-button'>
            <button className = 'footer-button' onClick = {() => this.goBack()}>
                BACK
            </button>
          </div> */}
          <div className = 'reset-button footer-item'>
            <button className = 'footer-button' onClick = {() => this.reset()}>
              RESET
            </button>
          </div>
          {this.props.final && <div className = 'screenshot-button'>
            <button className = 'footer-button' onClick = {() => this.screenshot()}>
              SAVE
            </button>
          </div>}
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    previousLevel: state.previousLevel,
    final: state.final,
    levelFourActive: state.levelFourActive,
    levelFiveActive: state.levelFiveActive,
    levelSixActive: state.levelSixActive,
    levelSevenActive: state.levelSevenActive,
    levelEightActive: state.levelEightActive
  }
}

export default connect(mapStateToProps)(Footer)
