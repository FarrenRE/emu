import React from 'react';

import Base from './base';
import Text from './modules/text';
import Content2 from './modules/content2';
import Banner from './modules/banner';

/**
 * Placeholder
 */
class TemplatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: ['text', 'content2'],
      assoc: 'adma'
    };

    this.themes = {
      adma: {
        org: {
          name: 'Association for Data-driven Marketing and Advertising',
          abbr: 'ADMA',
          abn: '34 002 909 800',
          addr: 'Level 6 50 Carrington Street, Sydney NSW 2000',
          social: {
            fb: 'http://www.facebook.com/adma.com.au',
            tw: 'http://www.twitter.com/adma',
            li: 'https://www.linkedin.com/company/adma',
          }
        },
        colors: {
          primary: '#CC0000',
          secondary: '#FFFFFF',
          bgColor: '#F6F6F6',
          link: '#CC0000',
          footer: '#363636'
        }
      },
      dtc: {
        org: {
          name: 'Digital + Technology Collective',
          abbr: 'D+TC',
          abn: '34 002 909 800',
          addr: 'Level 6 50 Carrington Street, Sydney NSW 2000',
          social: {
            fb: 'https://www.facebook.com/DigitalTechnologyCollective',
            tw: 'https://twitter.com/DandTCollective',
            li: 'https://www.linkedin.com/company/72345',
          }
        },
        colors: {
          primary: '#553278',
          secondary: '#FFFFFF',
          bgColor: '#F6F6F6',
          link: '#804bb4',
          footer: '#553278',
        }
      }
    }
  }
  spawnChild = (evt) => {
    const catArr = this.state.modules.concat( evt.target.value )
    this.setState({
      modules: catArr
    });
  }
  despawnChild = () => {
    let arr = this.state.modules;
    arr.pop();
    this.setState({ 
      modules: arr
    });
  }
  updateAssoc = (evt) => {
    this.setState({ assoc: evt.target.value });
  }
  render() {
    const childs = [];

    for ( let i=0; i<this.state.modules.length; i++ ) {
      switch( this.state.modules[i] ) {
        case 'content2':
          childs.push( <Content2 theme={ this.themes[this.state.assoc] } key={i} id={i+1} /> );
          break;
        case 'text':
          childs.push( <Text theme={ this.themes[this.state.assoc] } key={i} id={i+1} /> );
          break;
        case 'banner':
          childs.push( <Banner theme={ this.themes[this.state.assoc] } key={i} id={i+1} /> );
          break;
        default:
          break;
      }
    }
    return(
      <div>
        <h1>{ this.state.assoc }</h1>
        <div className='columns'>
          <div className='column'>
            <h2>Modules</h2>
            <div id='edm-content' style={{ border: '1px solid black' }}>
              <Base theme={ this.themes[this.state.assoc] }>{ childs }</Base>
            </div>
          </div>
          <div className='column'>
            <button onClick={ this.spawnChild } value='text'>Spawn text</button><br />
            <button onClick={ this.spawnChild } value='content2'>Spawn content2</button><br />
            <button onClick={ this.spawnChild } value='banner'>Spawn banner</button>
            <br /><br />
            <button onClick={ this.despawnChild }>Despawn module</button>
            <p>Theme:</p>
            <select onChange={ this.updateAssoc }>
              <option value='adma'>ADMA</option>
              <option value='dtc'>D+TC</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplatePicker