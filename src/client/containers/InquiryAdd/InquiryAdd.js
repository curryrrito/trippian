import log from '../../log'
import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronInquiryWidget, InquiryAddFormWidget
}
from '../../components/index'

export default class InquiryAdd extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="inquiry-add-page">
        <JumbotronInquiryWidget />
        <div className="container main-content-container">
          <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
            <InquiryAddFormWidget />
          </div>
        </div>
      </div>
    )
  }
}
InquiryAdd.propTypes = {
  name: PropTypes.string
}

InquiryAdd.displayName = 'InquiryAdd Page'
