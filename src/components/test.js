import React from 'react';
// https://medium.com/@jordanmmartin/quickstart-guide-to-using-cloudinary-upload-widget-v2-in-react-4c4d9041d55e
class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'hello',
      noun: 'world',
      url: 'some sample url'
    }
  }
  showWidget = () => {
    this.widget.open();
  }
  checkUploadResult = (resultEvent) => {
    if (resultEvent.event === 'success') {
      console.log(`url: ${resultEvent.info.url}`);
      this.setState({ url: resultEvent.info.url });
    } else {
      console.log('upload error');
    }
  }
  render() {
    this.widget = window.cloudinary.createUploadWidget({
      cloudName: 'adma',
      uploadPreset: 'my_preset'
    },
      (error, result) => { this.checkUploadResult(result) });

    return (
      <div>
        <button onClick={this.showWidget}>{this.state.url}</button>
      </div>
    );
  }
  myChangeHandler = (evt) => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState({ [name]: value });
  }
}

export default Test;