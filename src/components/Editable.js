import React from 'react';
import _ from 'lodash';

class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.id = this.setId();
    this.myRef = React.createRef();
  }
  setId = () => {
    return _.uniqueId('editable_');
  }
  render() {
    return(
      <div ref={ this.myRef } className={ `editable ${ this.props.activeID === this.id ? 'active': '' }` } id={ this.id } onClick={ (e) => { this.props.setActiveEdit(e, this) } }>{ this.props.children }</div>
    );
  }
}

export default Editable;