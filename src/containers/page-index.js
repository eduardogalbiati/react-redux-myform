import React, { Component } from 'react'
import { connect } from 'react-redux'

import Index from '../components/index'

class PageIndex extends Component {

  render() {
    return (
      <Index />
    )
  }

}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
})(PageIndex)
