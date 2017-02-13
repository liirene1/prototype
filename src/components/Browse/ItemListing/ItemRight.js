import React, {PropTypes} from 'react';

class ItemRight extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="slat-secondary columns shrink">
        <span className="ui-icon i-darker-gray i-sm-medium slat-secondary-icon">
          <svg>
            <use xlinkHref="#i-star"></use>
          </svg>
        </span>
        <span className="float-right slat-dropdown">
          <span className="ui-icon i-darker-gray i-sm-medium slat-secondary-more">
            <svg>
              <use xlinkHref="#i-more-vert"></use>
            </svg>
          </span>
        </span>
      </div>
    );
  }
};

//ItemRight.propTypes = {
  //item: PropTypes.object.isRequired
//};

export default ItemRight;
