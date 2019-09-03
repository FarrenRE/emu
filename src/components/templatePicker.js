import React from 'react';
import { renderToString } from 'react-dom/server';
import _ from 'lodash';

import Base from './Base';
import DraftWYSIWYG from './DraftWYSIWYG';
import CKEditor from '@ckeditor/ckeditor5-react';
import InlineEditor from '@ckeditor/ckeditor5-build-inline';
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
      editorContent: '<p>To get started, <strong>click</strong> on an <span style="color:rebeccapurple;">editable element</span>. Then you may edit the contents <em>here</em>!</p>',
      currentEditable: null
    };
    this.themes = themes;
    this.utmString = `?utm_medium=${this.state.utm.medium}&utm_source=${this.state.utm.source}&utm_campaign=${this.state.utm.campaign}`;
    this.id = _.uniqueId('editor');
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
  /**
   * Generic handler for <input> updates. Updates state corresponding to name value
   */
  onInputUpdate = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
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
    console.log('--- setActiveEdit() ---');
    e.preventDefault();
    const id = e.currentTarget.id;
    this.setState({ 
      activeID: id,
      currentEditable: el.myRef
    });
    
    console.log('innerHTML:');
    console.log(el.myRef.current.innerHTML);
    console.log('children:');
    console.log(el.myRef);
    console.log('props children:');
    console.log(el.props.children);

    this.setEditorContent( el.props.children );

    console.log('-----------');
  }
  setEditorContent = (content) => {
    console.log('--- setEditorContent() ---');
    this.id = _.uniqueId('editor'); // updating key triggers component update
    this.setState({ editorContent: renderToString( content ) });
    console.log('-----------');
  }
  updateEditable = (updatedContent) => {
    console.log( updatedContent );
    const currentRef = this.state.currentEditable;
    currentRef.current.innerHTML = updatedContent;
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
                utms={this.getUtmString()}
                preheader={this.state.preheader}>
                {childs}
              </Base>
            </div>
          </div>
          <div className='column'>
            <h2>Settings</h2>
            <div style={{ marginBottom: '1em' }}>
              <button onClick={this.spawnChild} value='text'>Spawn text</button><br />
              <button onClick={this.spawnChild} value='heading'>Spawn heading</button><br />
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
              Preheader: <input onChange={this.onInputUpdate} type='text' name='preheader' defaultValue={'I\'ll be a header one day!'} />
            </div>
            <div style={{ marginBottom: '1em' }}>
              <textarea id='edm-html' /><br />
              <button onClick={ this.getHtml }>Get HTML</button>
            </div>
            <div style={{ marginBottom: '1em' }}>
              <DraftWYSIWYG
                key={ this.id }
                content={ this.state.editorContent }
                updateEditable={ this.updateEditable } />
            </div>
            <div style={{ marginBottom: '1em' }}>
              <CKEditor 
                editor={ InlineEditor }
                data="<p>Hello world</p>"
                onChange={ ( event, editor ) => {
                  const data = editor.getData();
                  console.log( { event, editor, data } );
                } }
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TemplatePicker