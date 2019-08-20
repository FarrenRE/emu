import React from 'react';

class Child extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return(
      <div>
        <p style={{ color: this.props.styles.primaryColor }}>I am child { this.props.childNumber }</p>
      </div>
    );
  }
}

export default Child;
