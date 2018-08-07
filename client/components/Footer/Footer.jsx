import React from 'react'
import {connect} from 'react-redux'

import './footer.css'
import {resetLevels} from '../../actions/reset'
import {usePreviousLevel} from '../../actions/previous-level'
import {displayWebAddress, fullWebAddress, phoneNum, email
  // ,fbAddress, twitterAddress, linkedInAddress, instagramAddress
} from '../../data/constants'

class Footer extends React.Component {
  goBack () {
    this.props.dispatch(usePreviousLevel(this.props.previousLevel))
  }

  reset () {
    this.props.dispatch(resetLevels())
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
          {/* <a href={fbAddress} target='_blank' rel = 'noopener noreferrer'>
            <img src = '/images/facebook.png' alt = 'Facebook icon' className = 'social-icon'/>
          </a>
          <a href={twitterAddress} target='_blank' rel = 'noopener noreferrer'>
            <img src = '/images/twitter.png' alt = 'Twitter icon' className = 'social-icon'/>
          </a>
          <a href={linkedInAddress} target='_blank' rel = 'noopener noreferrer'>
            <img src = '/images/linkedin.png' alt = 'Linkedin icon' className = 'social-icon'/>
          </a>
          <a href={instagramAddress} target='_blank' rel = 'noopener noreferrer'>
            <img src = '/images/instagram.png' alt = 'instagram icon' className = 'social-icon'/>
          </a> */}
          <div className = 'back-button'>
            <button onClick = {() => this.goBack()}>
                back
            </button>
          </div>
          <div className = 'reset-button'>
            <button onClick = {() => this.reset()}>
                reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    previousLevel: state.previousLevel
  }
}

export default connect(mapStateToProps)(Footer)
