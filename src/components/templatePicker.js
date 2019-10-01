import React from 'react';
import _ from 'lodash';

import Base from './Base';
import DraftWYSIWYG from './DraftWYSIWYG';
import Module from './Module';
import ModuleSpawner from './ModuleSpawner';

import themes from './themes';

/**
 * TemplatePicker class contains working email template, editor, and settings
 * TODO: Split into separate components
 */
class TemplatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modules: ['text', 'heading', 'content2', 'contentLeft', 'banner', 'button2'],
      assoc: 'adma',
      campaign: 'monthly',
      utm: { medium: 'Email', source: 'ADMA', campaign: 'Monthly' },
      activeID: null,
      editorContent: '<p>To get started, <strong>click</strong> on an <span style="color:rebeccapurple;">editable element</span>. Then you may edit the contents <em>here</em>!</p>',
      currentEditable: null
    };
    this.themes = themes;
    this.utmString = `?utm_medium=${this.state.utm.medium}&utm_source=${this.state.utm.source}&utm_campaign=${this.state.utm.campaign}`;
    this.id = _.uniqueId('editor');
  }
  /** Adds element to bottom of edm template */
  spawnChild = (evt) => {
    const catArr = this.state.modules.concat(evt.target.value)
    this.setState({ modules: catArr });
  }
  /** Removes last element from edm template */
  despawnChild = () => {
    let arr = this.state.modules;
    arr.pop();
    this.setState({ modules: arr });
  }
  /** Handler for Association <select> */
  updateAssoc = (evt) => {
    this.setState({ assoc: evt.target.value });
  }
  /** Handler for Campaign <select> */
  updateCampaign = (evt) => {
    this.setState({ campaign: evt.target.value });
  }
  /** Generic handler for <input> updates. Updates state corresponding to name value */
  onInputUpdate = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  /** Handler for UTM <input> updates. */
  updateUtm = (evt) => {
    let newUTM = this.state.utm;
    const name = evt.target.name;
    const value = evt.target.value;
    newUTM[name] = value;
    this.setState({ utm: newUTM });
  }
  /** Compiles valid entire UTM string for a URL */
  getUtmString = () => {
    return `?utm_medium=${this.state.utm.medium}&utm_source=${this.state.utm.source}&utm_campaign=${this.state.utm.campaign}`;
  }
  /** Set active Editable on click. Updates WYSIWYG */
  setActiveEdit = (e, el) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    this.setState({
      activeID: id,
      currentEditable: el.myRef
    });
    // set editor content to active Editable's HTML
    this.setEditorContent(el.myRef.current.innerHTML);
  }
  /** Sets editor HTML
   * @param {String} content : HTML string (Editable contents)
   */
  setEditorContent = (content) => {
    console.log('--- setEditorContent() ---');
    this.id = _.uniqueId('editor'); // updating key triggers component update
    this.setState({ editorContent: content });
    console.log((content));
    console.log('-----------');
  }
  /** DraftWYSIWYG updateEditable() event handler */
  updateEditable = (updatedContent) => {
    console.log(updatedContent);
    const currentRef = this.state.currentEditable;
    currentRef.current.innerHTML = updatedContent;
  }
  /** TODO: React-ify this function... */
  getHtml = () => {
    const edmHtml = document.getElementById('edm-content');
    const textarea = document.getElementById('edm-html');

    textarea.value = edmHtml.innerHTML;
  }
  render() {
    // spawn all Modules in array
    const childs = [];
    for (let i = 0; i < this.state.modules.length; i++) {
      childs.push(
        <Module
          type={this.state.modules[i]}
          key={i} id={i}
          theme={this.themes[this.state.assoc]}
          utms={this.getUtmString()}
          setActiveEdit={this.setActiveEdit}
          activeID={this.state.activeID} />);
    }

    // generate list of available campaigns
    console.log('------- campaigns -------');
    const campaigns = this.themes[this.state.assoc].campaign;
    console.log(campaigns);
    let campaignOptions = ``;
    for (let c of Object.keys(campaigns)) {
      console.log(c);
      campaignOptions += `<option value='${c}'>${campaigns[c].name}</option>`;
    }
    console.log('----------------------');

    return (
      <div>
        <select onChange={this.updateAssoc} className='select'>
          <option value='adma'>ADMA</option>
          <option value='iq'>IQ</option>
          <option value='dtc'>D+TC</option>
        </select>
        <select onChange={this.updateCampaign} className='select' dangerouslySetInnerHTML={{ __html: campaignOptions }}></select>
        <div className='columns'>
          <div className='column'>
            <h2>Preview</h2>
            <div id='edm-content' style={{ border: '1px solid black' }}>
              <Base
                theme={this.themes[this.state.assoc]}
                campaign={this.state.campaign}
                utms={this.getUtmString()}
                preheader={this.state.preheader}>
                {childs}
              </Base>
            </div>
          </div>
          <div className='column'>
            <div style={{ marginBottom: '1em' }}>
              <DraftWYSIWYG
                key={this.id}
                content={this.state.editorContent}
                updateEditable={this.updateEditable} />
            </div>
            <h2>Spawn Modules</h2>
            <div style={{ marginBottom: '1em' }}>
              <ModuleSpawner
                spawnChild={this.spawnChild}
                despawnChild={this.despawnChild} />
            </div>
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
              <button onClick={this.getHtml}>Get HTML</button>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default TemplatePicker