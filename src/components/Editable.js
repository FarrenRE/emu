import React from 'react';

class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return(
      <div className={ `editable ${ this.props.activeID === 'editable-' + this.props.id ? 'active': '' }` } id={ `editable-${this.props.id}` } onClick={ this.props.setActiveEdit }>{ this.props.children }</div>
    );
  }
}

export default Editable;