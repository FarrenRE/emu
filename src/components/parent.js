import React from 'react';

import GoodChild from './goodChild';
import BadChild from './badChild';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      childs: ['good', 'bad', 'bad', 'good']
    };
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
  render() {
    const childs = [];
    for ( let i=0; i<this.state.childs.length; i++ ) {

      switch( this.state.childs[i] ) {
        case 'good':
          childs.push( <GoodChild key={ i+1 } childNumber={ i+1 } /> );
          break;
        case 'bad':
            childs.push( <BadChild key={ i+1 } childNumber={ i+1 } /> );
            break;
        default:
          break;
      }
    }
    return(
      <div>
        <h1>I am Parent of many lovely Childs</h1>
        <div class='columns'>
          <div class='column'>
            { childs }
          </div>
          <div class='column'>
            <button onClick={ this.spawnChild } value='good'>Spawn sweet angel</button>
            <button onClick={ this.spawnChild } value='bad'>Spawn little devil</button>
            <button onClick={ this.despawnChild }>Despawn child</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Parent