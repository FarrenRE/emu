import React from 'react';
import _ from 'lodash';

class EditableImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      src: `https://via.placeholder.com/${this.props.width}x${this.props.height}.jpg`,
    };
    this.id = this.setId();
    this.imgRef = React.createRef();
  }
  setId = () => {
    return _.uniqueId('editableimg_');
  }
  showWidget = () => {
    this.widget.open();
  }
  checkUploadResult = (resultEvent) => {
    if (resultEvent.event === 'success') {
      // console.log(`new source: ${resultEvent.info.url}`);
      this.setState({ src: resultEvent.info.url });
    } else {
      // console.log(`result event: ${resultEvent.event}`);
    }
  }
  getUploadPreset() {
    let uploadPreset;
    if (this.props.width === 270 && this.props.height === 190) {
      uploadPreset = 'edm_content_270x190';
    } else {
      uploadPreset = 'my_preset';
    }
    console.log(`EditableImage ${this.id} using upload preset ${uploadPreset}`);
    return uploadPreset;
  }
  render() {
    this.widget = window.cloudinary.createUploadWidget({
      cloudName: 'adma',
      uploadPreset: this.getUploadPreset()
    },
      (error, result) => { this.checkUploadResult(result) });

    return (
      <div>
        <img
          ref={this.imgRef}
          className={`editableimg ${this.props.activeID === this.id ? 'active' : ''}`}
          id={this.id}
          onClick={(e) => { this.showWidget() }}
          src={this.state.src}
          alt={this.props.alt}
          style={this.props.style}
          width={this.props.width}
          height={this.props.height}
          border={0} />
      </div>
    );
  }
}

export default EditableImage;