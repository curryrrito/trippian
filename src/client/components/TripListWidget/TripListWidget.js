import React from 'react'
import {
  TripListItemWidget, NoContentWidget
}
from '../index'

const TripListWidget = ({
  dataList = [], emptyMessage = 'There is no trip yet. '
}) => {
  console.log('inside Trip list', dataList, dataList.length)
  return (
    <div className="popular-Trips section-body clearfix">
      {dataList.length === 0 && 
        <NoContentWidget message={emptyMessage} />
      }
      { 
         dataList.map((trip, key) => (
           <TripListItemWidget key={key} {...trip} />
        ))
      }
    </div>
  )
}
TripListWidget.displayName = 'TripListWidget'

export default TripListWidget
