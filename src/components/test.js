import React from 'react';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'hello',
      noun: 'world'
    }
  }
  render() {
    return ( 
      <div>
        <h1>{ this.state.greeting } { this.state.noun }</h1>
        <form>
        <input
            type='text'
            name='greeting'
            value={ this.state.greeting }
            onChange={ this.myChangeHandler } />
          <input
            type='text'
            name='noun'
            value={ this.state.noun }
            onChange={ this.myChangeHandler } />
        </form>
      </div>
    );
  }
  myChangeHandler = ( evt ) => {
    let name = evt.target.name;
    let value = evt.target.value;
    this.setState({ [name]: value });
  }
}

export default Test;