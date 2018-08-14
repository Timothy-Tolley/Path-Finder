import React from 'react'
import {connect} from 'react-redux'

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
    if (this.props.previousLevel === false) {
      return
    }
    this.props.dispatch(resetLevels())
    setTimeout(() =>
      this.resetRight(), 2700)
  }

  resetRight () {
    const wordMap = document.getElementById('pathfinder-app')
    wordMap.scrollLeft -= window.innerWidth * 2
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
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    previousLevel: state.previousLevel,
    final: state.final
  }
}

export default connect(mapStateToProps)(Footer)
