import React from 'react';

class BadChild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return(
      <div>
        <p>I am become child { this.props.childNumber } devourer of biscuits.</p>
      </div>
    );
  }
}

export default BadChild;
