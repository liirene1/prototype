import React, {PropTypes} from 'react';
import ItemLeft from './ItemLeft';
import ItemMain from './ItemMain';
import ItemRight from './ItemRight';

class ItemListing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {item} = this.props;

    return (
      <div className="slat row align-middle collapse excel">
        <ItemLeft item={item}/>
        <ItemMain item={item}/>
        <ItemRight />
      </div>
    );
  }
};

//ItemListing.propTypes = {
  //item: PropTypes.object.isRequired
//};

export default ItemListing;
