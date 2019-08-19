import React from 'react';

import Content2 from './content2';
import Base from './base';

class TemplateBase extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: ['content2']
    };
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
  render() {
    const childs = [];

    for ( let i=0; i<this.state.modules.length; i++ ) {
      switch( this.state.modules[i] ) {
        case 'content2':
          childs.push( <Content2 key={ i } /> );
          break;
        default:
          break;
      }
    }
    return(
      <div>
        <h1>Template Base</h1>
        <div class='columns'>
          <div class='column'>
            <h2>Modules</h2>
            <Base>
            { childs }
            </Base>
          </div>
          <div class='column'>
            <h2>Controls</h2>
            <button onClick={ this.spawnChild } value='content2'>Content 2</button>
            <button onClick={ this.despawnChild }>Remove last module</button>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplateBase