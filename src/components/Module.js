import React from 'react';

/* EDM Modules */
import Text from './modules/text';
import Content2 from './modules/content2';
import ContentLeft from './modules/contentLeft';
import Banner from './modules/banner';
import Button1 from './modules/button1';
import Button2 from './modules/button2';
import Heading from './modules/heading';

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let newModule;
    switch (this.props.type) {
      case 'content2':
        newModule = <Content2 key={this.props.id} id={this.props.id} theme={this.props.theme} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'contentLeft':
        newModule = <ContentLeft key={this.props.id} id={this.props.id} theme={this.props.theme} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'text':
        newModule = <Text key={this.props.id} id={this.props.id} theme={this.props.theme} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'banner':
        newModule = <Banner key={this.props.id} id={this.props.id} theme={this.props.theme} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'button1':
        newModule = <Button1 key={this.props.id} id={this.props.id} theme={this.props.theme} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'button2':
        newModule = <Button2 key={this.props.id} id={this.props.id} theme={this.props.theme} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'heading':
        newModule = <Heading key={this.props.id} id={this.props.id} theme={this.props.theme} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      default:
        break;
    }
    return (
      <>{newModule}</>
    );
  }
}

export default Module;