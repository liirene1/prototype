import React, { PropTypes } from 'react';
import * as authActions from '../actions/authActions';
import { reduxForm } from 'redux-form';

class LoginForm extends React.Component {
  handleFormSubmit({email, password}) {
    console.log("handle", {email, password});
    this.props.signinUser( {email, password});
  }

  render() {
    const { handleSubmit, fields: {email, password}} = this.props;

    return (
      <form className="login-box-form" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <input {...email} className="login-box-form-username" type="text" placeholder="Email" required />
        <input {...password} className="login-box-form-password" type="password" placeholder="Password" required />
        <button action="submit" className="button login-box-form-submit" data-open type="submit" disabled="disabled"> Sign In </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'login',
  fields: ['email, password']
}, mapStateToProps, authActions)(LoginForm);
