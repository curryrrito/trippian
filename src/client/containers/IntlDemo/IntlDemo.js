import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronTrippianWidget, LocaleMenuWidget, RelativeTimeWidget, SendButtonIntl
}
from '../../components/index'
import {
  FormattedMessage, FormattedDate, FormattedNumber, FormattedTime, FormattedHTMLMessage, FormattedPlural
}
from 'react-intl'

export default class IntlDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Eric',
      unreadCount: 1000,
      user: {
        name: 'Eric',
        unreadCount: 4,
        lastLoginTime: Date.now() - 1000 * 60 * 60 * 24
      }
    }
  }

  handleClick() {
    console.log('intl button clicked')
  }

  render() {
    let now = Date.now()
    let num = 10000
    const {
      name, unreadCount
    } = this.state

    return (
      <div id="intl-demo-page">
        <JumbotronTrippianWidget title='IntlDemo' isNoContact isTitled />
        <div className="container main-content-container">
            <div className="col-sm-12 col-md-8 col-md-offset-2 content-container">
                <div className="section inquiries">
                    <div className="section-header">
                        <h3>Intl Demos</h3>
                        <LocaleMenuWidget />
                    </div>
                      <hr />

                    <div className="section-body">
                      <h3>Intl Component</h3>

                        <SendButtonIntl onClick={this.handleClick} />

                      <h3>FormattedMessage</h3>
                      <FormattedMessage
                          id="app.title"
                          description="this is a formated title message"
                          defaultMessage="Trippian Intl Demo Page "
                      />
                      <hr />
                      <h3>FormattedDate</h3>
                      <time dateTime={now} className="fancy-date">
                          <FormattedDate value={now} />
                      </time>
                      <hr />

                      <h3>FormattedTime</h3>
                      <time dateTime={now} className="fancy-date">
                          <FormattedTime value={now} />
                      </time>
                      <hr />

                      <h3>FormattedNumber</h3>
                      <FormattedNumber value={num}>
                          {(formattedNum) => (
                              <option value={num}>{formattedNum}</option>
                          )}
                      </FormattedNumber>
                      <hr />

                      <h3>FormattedHTMLMessage</h3>
                      <FormattedHTMLMessage
                       id="app.rich_description"
                       description="this is a formated html message"
                       defaultMessage='<h2 style="color: red">大号字 - rich html</h2>'
                       />

                      <h3>Formtted Relative Time</h3>
                      
                       <RelativeTimeWidget date="Wed Jan 20 2016 19:36:40 GMT-0800 (PST)" intl='fr' ></RelativeTimeWidget>
                       Hello <b>{name}</b>, you have {' '}
                                       <FormattedNumber value={unreadCount} /> {' '}
                                       <FormattedPlural value={unreadCount}
                                           one="message"
                                           other="messages"
                                       />.
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
IntlDemo.propTypes = {
  name: PropTypes.string
}

IntlDemo.displayName = 'IntlDemo Page'
