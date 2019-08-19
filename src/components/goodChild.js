import React from 'react';

class GoodChild extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return(
      <div>
        <p>What a darling child { this.props.childNumber } I am.</p>
      </div>
    );
  }
}

export default GoodChild;
