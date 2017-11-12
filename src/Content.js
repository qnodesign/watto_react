import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="hello">{this.props.text}</div>
    );
  }
}

Content.propTpyes = {
	text: PropTypes.string,
};
Content.defaultProps = {
	text: 'Hello bello',
};

export default Content;
