import React, {
  Component, PropTypes
}
from 'react'
import {
  reduxForm
}
from 'redux-form'
import {
  FileEnhance
}
from '../../hocs/FileEnhance'
import store from '../../redux/store'

import {
  setTrippian
}
from '../../redux/actionCreators'
import {
  trippian as emptyData
}
from '../../redux/initalState'

class TrippianPostFormWidget extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      isHOC: false,
      isFormSubmitted: store.getState().appState.get('isFormSubmitted')
    })
  }

  handleSubmit(data) {
    console.log('******submitting in the form', this.props.files, this.props.isFileUploading)
    if (this.props.isFileUploading) {
      // TODO: set alert here 
    } else {
      // set files in the store so the store action can read it before fetching 
      // store.dispatch(setFiles(this.props.files)) // FileEnhance handle it at the store
      this.props.handleSubmit(data)
        //TODO: clear out the form and picture in callee 
    }
  }

  render() {
    const {
      fields: {
        name, email, location, mobile, slogan, website, bio, introduction
      },
      handleSubmit,
      submitting,
      resetForm,
      load
    } = this.props
    let data = {
      name: 'Audrey Li',
      location: 'Chengdu, China',
      mobile: '123 456 789 ',
      slogan: 'Life is short, travel hard',
      website: 'http://audreyli.me',
      bio: 'Just a curious soul',
      introduction: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam itaque, corporis ipsum facilis asperiores praesentium impedit eius sapiente animi nisi.',
    }

    return (

      <form onSubmit={handleSubmit} role="form">
       <div className="form-group">
         <label>Name</label>
         <input type="text" className="form-control" placeholder=""  {...name}/>
       </div>

       <div className="form-group">
         <label>Email</label>
         <input type="email" className="form-control"  {...email}/>
       </div>

       <div className="form-group">
         <label>Location</label>
         <input type="text" className="form-control" {...location}/>
       </div>

       <div className="form-group">
         <label>Mobile</label>
         <input type="tel" className="form-control" placeholder="+001 123 456 789"  {...mobile}/>
       </div>

       <div className="form-group">
         <label>Slogan</label>
         <input type="text" className="form-control" placeholder=""  {...slogan}/>
       </div>
       <div className="form-group">
         <label>Website</label>
         <input type="text" className="form-control" placeholder=""  {...website}/>
       </div>
       <div className="form-group">
         <label>Bio</label>
         <textarea name="bio" className="form-control" className="form-control" rows="3" required="required" {...bio}></textarea>
       </div>

       <div className="form-group">
         <label>Introduction</label>
         <textarea name="introduction" className="form-control" className="form-control" rows="3" required="required"  {...introduction}></textarea>
       </div>
       <div className="pull-right">
         <button disabled={this.props.isFileUploading || submitting} className={'btn ' + (this.props.isFileUploading ? 'disabled' : 'btn-success') } onClick={this.handleSubmit.bind(this)}>Submit</button> 
         <button type="button" className="btn btn-default" disabled={submitting} onClick={()=> load(emptyData)} > Clear Values</button>
         <button type="button" className="btn btn-default" onClick={() => load(data)}>Load Dummy Data</button>
       </div>
     </form>
    )
  }
}


TrippianPostFormWidget = reduxForm({
    form: 'trippianPostForm', // a unique name for this form
    fields: ['name', 'location', 'mobile', 'slogan', 'website', 'bio', 'introduction'] // all the fields in the form
  },
  state => ({ // mapStateToProps
    initialValues: state.apiTrippian.get('trippian') // will pull state into form's initialValues
  }), {
    load: setTrippian
  } // mapDispatchToProps (will bind action creator to dispatch)
)(TrippianPostFormWidget)

TrippianPostFormWidget.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  resetForm: PropTypes.func.isRequired
    // submitting: PropTypes.bool.isRequired
}

TrippianPostFormWidget.displayName = 'TrippianPostFormWidget'

export default FileEnhance(TrippianPostFormWidget)
