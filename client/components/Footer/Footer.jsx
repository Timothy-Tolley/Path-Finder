import React from 'react'

import './footer.css'
import {displayWebAddress, fullWebAddress, phoneNum, email, fbAddress, twitterAddress, linkedInAddress, instagramAddress} from '../../data/constants'

class Footer extends React.Component {
  render () {
    return (
      <div className = 'footer-bar'>
        <div className = 'footer-text'>
          <div className = 'footer-link-cont'>
            <a href={fullWebAddress} className = 'footer-item footer-link' target='_blank'> {displayWebAddress} </a>
          </div>
          <div className = 'footer-link-cont'>
            <a href={`tel:${phoneNum}`} className = 'footer-item footer-link'> {phoneNum} </a>
          </div>
          <div className = 'footer-link-cont'>
            <a href={`mailto:${email}`} className = 'footer-item footer-link'> {email} </a>
          </div>
        </div>
        <div className = 'footer-icons'>
          <a href={fbAddress} target='_blank'>
            <img src = '/images/facebook.png' alt = 'Facebook icon' className = 'social-icon'/>
          </a>
          <a href={twitterAddress} target='_blank'>
            <img src = '/images/twitter.png' alt = 'Twitter icon' className = 'social-icon'/>
          </a>
          <a href={linkedInAddress} target='_blank'>
            <img src = '/images/linkedin.png' alt = 'Linkedin icon' className = 'social-icon'/>
          </a>
          <a href={instagramAddress} target='_blank'>
            <img src = '/images/instagram.png' alt = 'instagram icon' className = 'social-icon'/>
          </a>
        </div>
      </div>
    )
  }
}

export default Footer
