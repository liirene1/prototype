import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import SearchForm from './SearchForm'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    console.log("hit X on search");
  }

  render() {
    return (
      <div className="browse-search">
        <div className="search-box-container">
          <span className="ui-icon i-darker-gray i-base search-box-search-icon">
            <svg>
              <use xlinkHref="#i-search"></use>
            </svg>
          </span>
          <SearchForm />
          <span onClick={this.handleClick()} className="ui-icon i-medium-gray i-base search-box-close-icon">
            <svg>
              <use xlinkHref="i-close-large"></use>
            </svg>
          </span>
        </div>
      </div>
    );
  }
}

SearchBar.propTypes = {
  // items: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return { items: state.items };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
