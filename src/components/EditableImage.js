import React from 'react';
import _ from 'lodash';

class EditableImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.id = this.setId();
    this.myRef = React.createRef();
  }
  setId = () => {
    return _.uniqueId('editableimg_');
  }
  render() {
    return (
      <img
        ref={this.myRef}
        className={`editableimg ${this.props.activeID === this.id ? 'active' : ''}`}
        id={this.id}
        onClick={(e) => { this.props.setActiveEdit(e, this) }}
        src={this.props.src}
        alt={this.props.alt} border={this.props.border}
        style={this.props.style}
        width={this.props.width}
        height={this.props.height} />
    );
  }
}

export default EditableImage;