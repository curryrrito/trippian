import React from 'react'
import ReactDriveIn from 'react-drive-in'
import {
  assetsURL as appConfig
}
from '../../config/appConfig'


const JumbotronVideoWidget = () => {
  return (
    <div className="jumbotron jumbotron-video">
        <div>
          <ReactDriveIn className="react-drive-in-video" show={appConfig.landingVideo} poster={appConfig.poster}/>
        </div>
        <h2>Hello</h2>
    </div>
  )
}


JumbotronVideoWidget.displayName = 'JumbotronVideoWidget'

export default JumbotronVideoWidget
