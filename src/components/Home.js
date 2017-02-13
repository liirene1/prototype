import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../actions/itemActions';

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //need to grab name from auth
  }

  render() {
    return (
      <div className="page">
        <div className="background-banner">
        </div>
        <div className="layout-content">
          <div className="layout-main">
            <div className="page-header">
              <div className="columns">
                <h1 className="page-title">Welcome Back, Phillip</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

Home.propTypes = {
  items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  //change this to grab name from auth
  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
