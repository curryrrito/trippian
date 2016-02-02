import React, {
  Component, PropTypes
}
from 'react'
import {
  getCookieByName
}
from '../../../shared/utils/clientUtils'
import {
  setAppStateUser
}
from '../../utils/storeUtils'

export default class Logout extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    const user = getCookieByName('trippianPass')
      // dipatch set user at appState 
    console.log('got user from coookie', user)
    setAppStateUser(false)
  }

  render() {
    return (
      <div className="login">
          <h3>Logout</h3>
          you logged out 
      </div>
    )
  }
}
Logout.propTypes = {
  name: PropTypes.string
}
