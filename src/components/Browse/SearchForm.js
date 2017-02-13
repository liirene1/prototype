import React, { PropTypes } from 'react';
import * as itemActions from '../../actions/itemActions';
import { reduxForm } from 'redux-form';

class SearchForm extends React.Component {
  handleFormSubmit(formProps) {
    this.props.searchItems(formProps);
  }

  handleKeyUp(event) {
    this.handleFormSubmit(event.target.value);
  }

  render() {
    const { handleSubmit, fields: {parameter}} = this.props;

    return (
      <input {...parameter} type="text" id="textInput" className="search-box" onKeyUp={this.handleKeyUp.bind(this)}></input>
    );
  }
}

function mapStateToProps(state) {

}

export default reduxForm({
  form: 'search',
  fields: ['parameter']
}, mapStateToProps, itemActions)(SearchForm);
