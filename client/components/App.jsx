import React from 'react'

import Header from './Header/Header'
import Footer from './Footer/Footer'
import PathFinder from './PathFinder/PathFinder'

class App extends React.Component {
  render () {
    return (
      <div className = 'page'>
        <Header />
        <PathFinder />
        <Footer />
      </div>
    )
  }
}

export default App
