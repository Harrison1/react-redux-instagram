import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1><Link to="/">HarryGram</Link></h1>
        <h1><Link to="/view">Views Page</Link></h1>
        {React.cloneElement(this.props.children, { ...this.props, key: undefined, ref: undefined })}
      </div>
    )
  }
});

export default Main;