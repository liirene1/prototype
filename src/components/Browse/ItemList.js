import React, {PropTypes} from 'react';
import ItemListing from './ItemListing/ItemListing';

class ItemList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="browse-slat-set">
        {this.props.items.map(item =>
          <ItemListing key={item.id} item={item} />
        )}
      </div>
    );
  }
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
