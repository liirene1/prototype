import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as itemActions from '../../actions/itemActions';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

class Browse extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.actions.loadItems();
  }

  renderList() {
    if (this.props.items.length > 0) {
      return (
        <div className="browse-stage">
          <ItemList items={this.props.items}/>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="page">
        <div className="layout-content">
          <div className="layout-main">
            <SearchBar />
            {this.renderList()}
          </div>
        </div>
      </div>
    );
  }
}

Browse.propTypes = {
  // checkedItems: PropTypes.array.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
