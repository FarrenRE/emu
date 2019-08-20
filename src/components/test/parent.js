import React from 'react';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div>
        <h1 style={{ color: this.props.styles.primaryColor }} >I am { this.props.theme } Parent of many lovely Childs</h1>
        { this.props.children }
      </div>
    )
  }
}

export default Parent;