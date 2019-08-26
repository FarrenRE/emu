import React from 'react';
import _ from 'lodash';
import uniqueId from 'lodash/util';

class Editable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.id = this.setId();
  }
  setId = () => {
    return _.uniqueId('editable_');
  }
  render() {
    return(
      <div className={ `editable ${ this.props.activeID === this.id ? 'active': '' }` } id={ this.id } onClick={ (e) => { this.props.setActiveEdit(e, this) } }>{ this.props.children }</div>
    );
  }
}

export default Editable;