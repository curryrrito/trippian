import React from 'react'
import {
  Link
}
from 'react-router'

import {
  FormattedMessage
}
from 'react-intl'
import store from '../../redux/store'

const DashboardMenuWidget = ({
  name = 'DashboardMenuWidget'
}) => {
  return (
    <ul className="user-menu-widget list-inline">   
        <li>
            <Link to='trippian-edit'>
                <FormattedMessage 
                    id="app-pages.trippian-edit-profile" 
                    description="trippian edit page title"
                    defaultMessage="Edit My Profile"/>
            </Link>
        </li>
        <li><a href="#">Friends</a></li>
        <li><Link to='destination-post'>Post a Destination</Link></li>
        <li><Link to='my-inquiries'>My Inquiries</Link></li>
        <li><Link to='my-trip-box'>My Trip Box</Link></li>
        <li><Link to='login'>Login</Link></li>
        <li><Link to='loginout'>Logout</Link></li>
    </ul>


  )
}

DashboardMenuWidget.displayName = 'DashboardMenuWidget'

export default DashboardMenuWidget
