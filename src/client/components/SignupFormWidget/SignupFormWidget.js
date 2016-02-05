import React, {
  Component, PropTypes
}
from 'react'

import {
  reduxForm 
}
from 'redux-form'
import store from '../../redux/store'
import {
  localSignup
}
from '../../redux/apiIndex'

const submit = (values, dispatch) => {
  store.dispatch(localSignup(values))
}

export default class SignupFormWidget extends Component {
  // static PropTypes = {
  //   error: PropTypes.string,
  //   fields: PropTypes.object.isRequired,
  //   handleSubmit: PropTypes.func.isRequired,
  //   resetForm: PropTypes.func.isRequired,
  //   submitting: PropTypes.bool.isRequired
  // }

  render() {
    const {
      fields: {
        name, email, password
      },
      error,
      resetForm,
      handleSubmit,
      submitting
    } = this.props

    return (
      <form onSubmit={handleSubmit(submit)}>
          <div>
            <label>Full Name</label>
            <div>
              <input type="text" placeholder="Full Name" {...name}/>
            </div>
            {name.touched && name.error && <div> {name.error}</div>}
          </div>
          <div>
            <label>Email</label>
            <div>
              <input type="text" placeholder="Email" {...email}/>
            </div>
            {email.touched && email.error && <div>{email.error}</div>}
          </div>
          <div>
            <label>Password</label>
            <div>
              <input type="text" placeholder="Password" {...password}/>
            </div>
            {password.touched && password.error && <div>{email.error}</div>}
          </div>
          <div>
            <button disabled={submitting} onClick={handleSubmit(submit)}>
            {submitting ? <i/> : <i/>} Sign Up
            </button>
          </div>
      </form>
    )
  }
}

SignupFormWidget = reduxForm({
  form: 'signupForm',
  fields: ['name', 'email', 'password']
})(SignupFormWidget)

SignupFormWidget.displayName = 'SignupFormWidget'

export default SignupFormWidget
