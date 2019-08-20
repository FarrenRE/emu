import React from 'react';

class Larva extends React.Component {
  constructor(props) {
    super(props)
    this.state = {};
  }
  render() {
    return(
      <div>
        <p style={{ color: this.props.styles.primaryColor }}>I am larva { this.props.childNumber }</p>
      </div>
    );
  }
}

export default Larva;
