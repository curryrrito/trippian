import React, {
  Component, PropTypes
}
from 'react'

import {
  JumbotronWidget, TripListWidget
}
from '../../components/index'

import {
  connect
}
from 'react-redux'


//******** YOU NEED TO ADD TO STORE *************
//Audrey: this one goes to apiIndex, I've moved all trippianAPI related calls to that file, as in the future, we'll need to refactor those into different files for modularity
import store from '../../redux/store'
import {
  getDestinationById
}
from '../../redux/apiIndex'

// this page only need destination as it's data for now, maybe appState later
function mapStateToProps(state) {
  return {
    // apiTrippian: state.apiTrippian,
    appState: state.appState,
    destination: state.apiTrippian.get('destination')
  }
}

@
connect(mapStateToProps)
export default class DestinationSearchResults extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    store.dispatch(getDestinationById(20))
      // Audrey: this was my early code, but now, the getDestinationById doesn't really a promise, once it get the data, it will set the state in the store 
      // so in this case, you can not use then, but you can log it in render function as whenever some new data comes in, this component will get re-rendered

    //.then(() => {console.log('****got destination data?!?!?', this.props.destinationById)})
  }

  render() {
    console.log('-- inside render, got destination data now?', this.props.destination, "this your data joe")
    const {
      name, description, feature, whyVisit, popularTrips
    } = this.props.destination
    return (
      <div id="destination-search-results-page">
       <JumbotronWidget title="Search Result" subTitle="There are 30 results in 'Paris'"/>
       <div className="container main-content-container">
         <div className="col-sm-12 col-md-10 col-md-offset-1 content-container">
             <h2>DestinationSearchResults</h2>
              <img src={feature} alt=""/>
              <h3> <b>Name:</b> {name}</h3>
              <p><b>Description:</b> {description}</p>
              <p><b>Why Visit:</b>{whyVisit}</p>
              <TripListWidget dataList={popularTrips} />
         </div>
       </div>
     </div>
    )
  }
}


DestinationSearchResults.propTypes = {
  name: PropTypes.string
}
