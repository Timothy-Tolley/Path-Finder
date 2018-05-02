import React from 'react'

import './header.css'
import {mainHeader, secondaryHeader} from '../../data/constants'

class Header extends React.Component {
  render () {
    return (
      <div className = 'header-bar'>
        <div className = 'header-text'>
          <p className = 'header-item main-header'>
            {mainHeader}
          </p>
          <p className = 'header-item secondary-header'>
            {secondaryHeader}
          </p>
        </div>
      </div>
    )
  }
}

export default Header
