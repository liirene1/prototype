import React, { PropTypes } from 'react';
import Header from './common/Header';
import SVG from './common/SVG';

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <SVG />
        {this.props.children}
      </div>
    );
  }
};

export default Main;
