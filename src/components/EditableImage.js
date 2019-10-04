import React from 'react';
import _ from 'lodash';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import "react-popupbox/dist/react-popupbox.css";

class EditableImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: ''
    };
    this.id = this.setId();
    this.imgRef = React.createRef();
  }
  setId = () => {
    return _.uniqueId('editableimg_');
  }
  openPopupbox = () => {
    const content = (
      <div>
        <span>Image src: </span>
        <input onChange={this.onInputUpdate} name='src' type='text' />
        <button onClick={this.updateData}>Submit</button>
      </div>
    )
    PopupboxManager.open({ content })
  }
  updateData = () => {
    console.log('updated');
    PopupboxManager.close();
  }
  /** Generic handler for <input> updates. Updates state corresponding to name value */
  onInputUpdate = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  render() {
    // pop-up box config: https://fraina.github.io/react-popupbox/
    const popupboxConfig = {
      className: 'editableimg-popup',
      titleBar: {
        enable: true,
        text: 'Image editor'
      },
      fadeIn: false,
    }

    return (
      <div>
        <img
          ref={this.imgRef}
          className={`editableimg ${this.props.activeID === this.id ? 'active' : ''}`}
          id={this.id}
          onClick={(e) => { this.openPopupbox() }}
          src={this.props.src}
          alt={this.props.alt} border={this.props.border}
          style={this.props.style}
          width={this.props.width}
          height={this.props.height} />
        <PopupboxContainer {...popupboxConfig} />
      </div>
    );
  }
}

export default EditableImage;