import React from 'react';

/* EDM Modules */
import Text from './modules/text';
import Text2 from './modules/text2';
import Content2 from './modules/content2';
import ContentLeft from './modules/contentLeft';
import Banner from './modules/banner';
import Button1 from './modules/button1';
import Button2 from './modules/button2';
import Heading from './modules/heading';
import Calendar from './modules/calendar';
import DynamicContentCourses from './modules/DynamicContentCourses';
import DateBlock from './modules/dateBlock';
import DynamicContentEvents from './modules/DynamicContentEvents';
import ProgramTable from './modules/ProgramTable';

class Module extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let newModule;
    switch (this.props.type) {
      case 'content2':
        newModule = <Content2 key={this.props.id} id={this.props.id} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'contentLeft':
        newModule = <ContentLeft key={this.props.id} id={this.props.id} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'text':
        newModule = <Text key={this.props.id} id={this.props.id} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'text2':
        newModule = <Text2 key={this.props.id} id={this.props.id} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'banner':
        newModule = <Banner key={this.props.id} id={this.props.id} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'button1':
        newModule = <Button1 key={this.props.id} id={this.props.id} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'button2':
        newModule = <Button2 key={this.props.id} id={this.props.id} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'heading':
        newModule = <Heading key={this.props.id} id={this.props.id} utms={this.props.utms} setActiveEdit={this.props.setActiveEdit} activeID={this.props.activeID} />;
        break;
      case 'calendar':
        newModule = <Calendar key={this.props.id} id={this.props.id} utms={this.props.utms} />;
        break;
      case 'dynamicContentCourses':
        newModule = <DynamicContentCourses key={this.props.id} id={this.props.id} />;
        break;
      case 'dateBlock':
        newModule = <DateBlock key={this.props.id} id={this.props.id} utms={this.props.utms} />;
        break;
      case 'dynamicContentEvents':
        newModule = <DynamicContentEvents key={this.props.id} id={this.props.id} />;
        break;
      case 'programTable':
        newModule = <ProgramTable key={this.props.id} id={this.props.id} />
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