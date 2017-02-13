import React, {PropTypes} from 'react';

class ItemLeft extends React.Component {
  constructor(props) {
    super(props);
  }

  renderDocumentIcon(type) {
    if (type === 'excel') {
      return (
        <span className="ui-icon i-excel i-xlarge">
          <svg>
            <use xlinkHref="#i-file-excel"></use>
          </svg>
        </span>
      );
    }
    if (type === 'word') {
      return (
        <span className="ui-icon i-word i-xlarge">
          <svg>
            <use xlinkHref="#i-file-word"></use>
          </svg>
        </span>
      );
    }
    if (type === 'pdf') {
      return (
        <span className="ui-icon i-pdf i-xlarge">
          <svg>
            <use xlinkHref="#i-file-pdf"></use>
          </svg>
        </span>
      );
    }
  }

  render() {
    const {item} = this.props;

    return (
      <div className="slat-avatar item-avatar">
        {this.renderDocumentIcon(item.document_type)}
      </div>
    );
  }
};

ItemLeft.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemLeft;
