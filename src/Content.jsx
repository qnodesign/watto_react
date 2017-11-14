import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Content.css';

class Content extends Component {
  render() {
    return (
      <div className="hello">
        {' '}
        Hello
        {this.props.text.map((obj, idx) => (
          <div key={`${obj.id}-${idx}`}>{JSON.stringify(obj)}</div>
        ))}
      </div>
    );
  }
}

Content.propTpyes = {
  text: PropTypes.array
};
Content.defaultProps = {
  text: []
};

export default Content;
