import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import { Link } from 'react-router';

import BarRight from './BarRight';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    //grab initials from auth
  }

  render() {
    return (
      <nav className="top-bar nav-bar is-fixed">
        <div className="top-bar-title nav-logo">
            <Link to="/">
              <span className="nav-bar-logo">
                <span className="ui-icon i-white i-base">
                  <svg>
                    <use xlinkHref="#i-ls-logo"></use>
                  </svg>
                </span>
              </span>
              LIFE SCIENCES
            </Link>
        </div>
        <div className="top-bar-left">
          <nav className="main-navigation">
            <ul className="menu">
              <li id="nav-item-browse">
                <Link to="/browse">
                  <span>BROWSE</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <BarRight />
      </nav>
    );
  }
}

//Header.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
//export default Header;
