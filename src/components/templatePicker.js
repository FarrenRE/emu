import React from 'react';

import Base from './Base';
import DraftTest from './draftTest';
import Module from './Module';

import themes from './themes';

/**
 * Placeholder
 */
class TemplatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: ['text', 'button2', 'text'],
      assoc: 'adma',
      utm: { medium: 'Email', source: 'ADMA', campaign: 'Monthly' },
      activeID: null,
      editorContent: '<p>Hello world</p>'
    };
    this.themes = themes;
    this.utmString = `?utm_medium=${this.state.utm.medium}&utm_source=${this.state.utm.source}&utm_campaign=${this.state.utm.campaign}`;
  }
  spawnChild = (evt) => {
    const catArr = this.state.modules.concat(evt.target.value)
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
  updateUtm = (evt) => {
    let newUTM = this.state.utm;
    const name = evt.target.name;
    const value = evt.target.value;
    newUTM[name] = value;
    this.setState({ utm: newUTM });
  }
  getUtmString = () => {
    return `?utm_medium=${this.state.utm.medium}&utm_source=${this.state.utm.source}&utm_campaign=${this.state.utm.campaign}`;
  }
  setActiveEdit = (e, el) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    this.setState({ activeID: id });

    // this.setEditorContent( el.props.children );
    this.setState({ editorContent: el.props.children });
  }
  setEditorContent = (content) => {
    console.log(content);
  }
  /**
   * TODO: React-ify this function...
   */
  getHtml = () => {
    const edmHtml = document.getElementById( 'edm-content' );
    const textarea = document.getElementById( 'edm-html' );

    textarea.value = edmHtml.innerHTML;
  }
  render() {
    const childs = [];
    for (let i = 0; i < this.state.modules.length; i++) {
      childs.push(
        <Module
          type={ this.state.modules[i] }
          key={i} id={i}
          theme={this.themes[this.state.assoc]}
          utms={this.getUtmString()}
          setActiveEdit={ this.setActiveEdit }
          activeID={ this.state.activeID } />);
    }

    return (
      <div>
        <select onChange={this.updateAssoc} style={{ padding: '0.25em', fontSize: '1em', margin: '0.25em' }}>
          <option value='adma'>ADMA</option>
          <option value='iq'>IQ</option>
          <option value='dtc'>D+TC</option>
        </select>
        <div className='columns'>
          <div className='column'>
            <h2>Preview</h2>
            <div id='edm-content' style={{ border: '1px solid black' }}>
              <Base
                theme={this.themes[this.state.assoc]}
                utms={this.getUtmString()}>
                {childs}
              </Base>
            </div>
          </div>
          <div className='column'>
            <h2>Settings</h2>
            <div style={{ marginBottom: '1em' }}>
              <button onClick={this.spawnChild} value='text'>Spawn text</button><br />
              <button onClick={this.spawnChild} value='content2'>Spawn content2</button><br />
              <button onClick={this.spawnChild} value='content-left'>Spawn content-left</button><br />
              <button onClick={this.spawnChild} value='banner'>Spawn banner</button><br />
              <button onClick={this.spawnChild} value='button1'>Spawn button1</button><br />
              <button onClick={this.spawnChild} value='button2'>Spawn button2</button><br />
            </div>
            <div style={{ marginBottom: '1em' }}><button onClick={this.despawnChild}>Despawn module</button></div>
            <div style={{ marginBottom: '1em' }}>
              utm_medium=<input onChange={this.updateUtm} type='text' name='medium' defaultValue='Email' /><br />
              utm_source=<input onChange={this.updateUtm} type='text' name='source' defaultValue={this.state.assoc.toUpperCase()} /><br />
              utm_campaign<input onChange={this.updateUtm} type='text' name='campaign' defaultValue='Monthly' />
            </div>
            <div style={{ marginBottom: '1em' }}>
              <textarea id='edm-html' /><br />
              <button onClick={ this.getHtml }>Get HTML</button>
            </div>
            <div style={{ marginBottom: '1em' }}>
              <DraftTest content={ this.state.editorContent } />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplatePicker