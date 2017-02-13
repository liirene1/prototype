import React, {PropTypes} from 'react';
import { Link } from 'react-router';

class BarRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top-bar-right">
        <nav className="secondary-navigation">
          <ul className="menu">
            <li>
              <Link to="/" className="nav-bar-icon">
                <span className="ui-icon i-primary i-base">
                  <svg>
                    <use xlinkHref="#i-help"></use>
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link to="/" className="nav-bar-avatar">
                <span className="avatar-initials">
                  <span className="avatar-initials-text">AK</span>
                </span>
              </Link>
            </li>
            <li>
              <a className="nav-mobile-toggler">
                <span className="ui-icon i-primary i-medium icon-open">
                  SVG
                </span>
                <span className="ui-icon i-primary i-medium icon-close">
                  SVG
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
};

//BarRight.propTypes = {
  //item: PropTypes.object.isRequired
//};

export default BarRight;
