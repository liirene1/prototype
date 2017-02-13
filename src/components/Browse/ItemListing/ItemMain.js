import React, {PropTypes} from 'react';
import ItemFooter from './ItemFooter';

class ItemMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;

    return (
      <div className="slat-body expand columns">
        <div className="rows">
          <div className="columns small-12">
            <h3 className="slat-header"> {item.name}</h3>
          </div>
        </div>
        <div className="rows slat-subtitle">
          <div className="columns small-12">
            <p className="slat-title-wrapper">
              <span className="slat-subtitle-prefix">Title: </span>
              <span className="slat-subtitle-text"> {item.title} </span>
            </p>
          </div>
        </div>
        <ItemFooter item={item}/>
      </div>
    );
  }
};

ItemMain.propTypes = {
  item: PropTypes.object.isRequired
};

export default ItemMain;
