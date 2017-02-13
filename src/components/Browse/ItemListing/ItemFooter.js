import React, {PropTypes} from 'react';

class ItemFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;

    return (
      <div className="row show-for-medium">
        <div className="columns small-12 medium-6">
          <p className="slat-attr-wrapper">
            <span className="slat-attr-key">Modified By:</span>
            <span className="slat-attr-value"> {item.modified_by} </span>
          </p>
          <p className="slat-attr-wrapper">
            <span className="slat-attr-key">Last Modified: </span>
            <span className="slat-attr-value">{item.updated_at}</span>
          </p>
        </div>
        <div className="columns small-12 medium-6">
          <p className="slat-attr-wrapper">
            <span className="slat-attr-key">Status: </span>
            <span className="slat-attr-value">{item.status} </span>
          </p>
          <p className="slat-attr-wrapper">
            <span className="slat-attr-key">Country: </span>
            <span className="slat-attr-value">{item.country}</span>
          </p>
        </div>
      </div>
    );
  }
};

ItemFooter.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemFooter;
