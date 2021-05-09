import React, { Component } from 'react'

import Ribbon from './Ribbon.js'
import Piccha from './Piccha.js'

class Header extends Component {
  render () {
    return (
      <>
        <Ribbon {...this.props} />
        <Piccha {...this.props} />
      </>
    )
  }
}

export default Header
