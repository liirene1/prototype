import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick() {
    document.getElementById("textInput").value = "";
    this.props.actions.loadItems();
  }

  handleKeyUp(event) {
    this.props.actions.searchItems(event.target.value);
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
          <input type="text" id="textInput" className="search-box" onKeyUp={this.handleKeyUp.bind(this)}></input>
          <span onClick={this.handleClick.bind(this)} className="ui-icon i-medium-gray i-base search-box-close-icon">
            <svg>
              <use xlinkHref="#i-close-large"></use>
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
