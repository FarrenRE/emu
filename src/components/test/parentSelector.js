import React from 'react';

import Parent from './parent';
import Child from './child';
import Larva from './larva';

class ParentSelector extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childs: ['child', 'larva'],
      theme: 'angel'
    };

    this.themes = {
      'angel': {
        'primaryColor': 'blue'
      },
      'devil': {
        'primaryColor': 'red'
      }
    }
  }
  spawnChild = (evt) => {
    const catArr = this.state.childs.concat( evt.target.value )
    this.setState({
      childs: catArr
    });
  }
  despawnChild = () => {
    let arr = this.state.childs;
    arr.pop();
    this.setState({
      childs: arr
    });
  }
  updateTheme = (evt) => {
    this.setState({ theme: evt.target.value });
  }
  render() {
    const childs = [];
    for ( let i=0; i<this.state.childs.length; i++ ) {
      switch( this.state.childs[i] ) {
        case 'child':
          childs.push( <Child key={ i+1 } childNumber={ i+1 } styles={ this.themes[this.state.theme] } /> );
          break;
        case 'larva':
            childs.push( <Larva key={ i+1 } childNumber={ i+1 } styles={ this.themes[this.state.theme] } /> );
          break;
        default:
          break;
      }
    }
    return(
      <div>
        <div className='columns'>
          <div className='column'>
            <Parent theme={ this.state.theme } styles={ this.themes[this.state.theme] }>{ childs }</Parent>
          </div>
          <div className='column'>
            <button onClick={ this.spawnChild } value='child'>Spawn child</button>
            <button onClick={ this.spawnChild } value='larva'>Spawn larva</button>
            <br /><br />
            <button onClick={ this.despawnChild }>Despawn child</button>
            <p>Theme:</p>
            <select onChange={ this.updateTheme }>
              <option value='angel'>angel</option>
              <option value='devil'>devil</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

export default ParentSelector;