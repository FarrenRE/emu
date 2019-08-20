import React from 'react';

class GoodChild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return(
      <div>
        <p>What a { this.props.upbringing } darling child { this.props.childNumber } I am.</p>
      </div>
    );
  }
}

export default GoodChild;
