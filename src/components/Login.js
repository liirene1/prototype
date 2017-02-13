import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../actions/itemActions';
import { Link } from 'react-router';

import LoginForm from './LoginForm';

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //grab initials from auth
  }

  render() {
    return (
      <div className="page">
        <div className="layout-content">
          <div className="layout-main">
            <div className="page-header">
              <div className="columns">
                <div className="login-box">
                  <span className="login-box-symbol">
                    <span className="ui-icon i-darkest-blue i-xxlarge">
                      <svg>
                        <use xlinkHref="#i-profile-large"></use>
                      </svg>
                    </span>
                  </span>
                  <div className="login-box-body">
                    <div className="login-box-header">
                      <h2>Sign In </h2>
                    </div>
                    <LoginForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Login.propTypes = {
  // checkedItems: PropTypes.array.isRequired,
  //actions: PropTypes.object.isRequired
//};

function mapStateToProps(state, ownProps) {
  //change this to grab initials from auth
  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
//export default Login;
