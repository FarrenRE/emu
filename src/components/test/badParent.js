import React from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <h1>I am the wicked Parent of many noxious Childs</h1>
        { this.props.children }
      </div>
    )
  }
}

export default Parent