import React from 'react';
import _ from 'lodash';
import pretty from 'pretty';

import Base from './Base';
import DraftWYSIWYG from './DraftWYSIWYG';
import Module from './Module';
import ModuleSpawner from './ModuleSpawner';

import themes from './themes';
import ThemeContext from './ThemeContext';
import { ThemeProvider } from './ThemeContext';

/**
 * TemplatePicker class contains working email template, editor, and settings
 * TODO: Split into separate components?
 * States:
 * @param {Array} modules : ordered array of edm module names to be spawned
 * @param {String} assoc : active Association template
 * @param {String} string : active Campaign template
 * @param {Object} utm : current UTM parameters
 * @param {String} activeEditableId : id of active Editable
 * @param {Ref} activeEditableRef : ref of active Editable
 * @param {String} editorContent : initial text editor content
 */
class TemplatePicker extends React.Component {
  static contextType = ThemeContext;
  constructor(props) {
    super(props);
    this.state = {
      modules: ['text', 'heading', 'content2', 'contentLeft', 'text2', 'button2', 'banner', 'heading', 'dateBlock', 'dateBlock', 'calendar', 'button1'],
      assoc: 'adma',
      campaign: 'monthly',
      utm: { medium: 'Email', source: 'ADMA', campaign: 'Monthly' },
      activeEditableId: null,
      activeEditableRef: null,
      editorContent: '<p>To get started, <strong>click</strong> on an <span style="color:rebeccapurple;">editable element</span>. Then you may edit the contents <em>here</em>!</p>'
    };
    this.themes = themes;
    this.utmString = `?utm_medium=${this.state.utm.medium}&utm_source=${this.state.utm.source}&utm_campaign=${this.state.utm.campaign}`;
    this.id = _.uniqueId('editor');
  }
  componentDidMount() {
    const theme = this.context;
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
    this.setState({
      assoc: evt.target.value,
      campaign: 'monthly' // reset to avoid undefined campaign (i.e. there is no ADMA AMYs)
    });
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
  /** 
   * Get active theme config from theme/assoc/campaign combo, assigning campaign themes
   * to theme.campaign object (not to be confused with theme.campaigns)
   */
  getActiveTheme = () => {
    // current association/campaign values
    const assoc = this.state.assoc;
    const cmpgn = this.state.campaign;
    let activeTheme = this.themes[assoc];
    activeTheme['campaign'] = this.themes[assoc].campaigns[cmpgn];
    return activeTheme;
  }
  /** Compiles valid entire UTM string for a URL */
  getUtmString = () => {
    return `?utm_medium=${this.state.utm.medium}&utm_source=${this.state.utm.source}&utm_campaign=${this.state.utm.campaign}`;
  }
  /** Set active Editable on click. Updates WYSIWYG */
  setActiveEdit = (e, el) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    this.setEditorContent(el.myRef.current.innerHTML); // update editor contents
    // update active editable in state
    this.setState({
      activeEditableId: id,
      activeEditableRef: el.myRef,
    });
  }
  /** Sets editor HTML
   * @param {String} content : HTML string (Editable contents)
   */
  setEditorContent = (content) => {
    this.id = _.uniqueId('editor'); // updating key triggers component update
    this.setState({ editorContent: content });
    console.log((content));
  }
  /** DraftWYSIWYG updateEditable() event handler */
  updateEditable = (updatedContent) => {
    console.log(updatedContent);
    const currentRef = this.state.activeEditableRef;
    currentRef.current.innerHTML = updatedContent;
  }
  /** TODO: React-ify this function... */
  getHtml = () => {
    const edmHtml = document.getElementById('edm-content');
    const textarea = document.getElementById('edm-html');

    textarea.value = pretty( edmHtml.innerHTML );
  }
  render() {
    // spawn all Modules in array
    const childs = [];
    for (let i = 0; i < this.state.modules.length; i++) {
      childs.push(
        <Module
          type={this.state.modules[i]}
          key={i} id={i}
          theme={this.getActiveTheme()}
          utms={this.getUtmString()}
          setActiveEdit={this.setActiveEdit}
          activeID={this.state.activeEditableId} />);
    }

    // generate list of available associations
    const associations = this.themes;
    let associationOptions = ``;
    for (let a of Object.keys(associations)) {
      associationOptions += `<option value='${a}'>${associations[a].org.abbr}</option>`;;
    }
    // generate list of available campaigns
    const campaigns = this.themes[this.state.assoc].campaigns;
    let campaignOptions = ``;
    for (let c of Object.keys(campaigns)) {
      campaignOptions += `<option value='${c}'>${campaigns[c].name}</option>`;
    }

    return (
      <div id='TemplatePicker'>

        <div className='edit-area'>
          <div className='columns'>
            <div className='column'>
              <div className='template-select'>
                <select onChange={this.updateAssoc} className='select' dangerouslySetInnerHTML={{ __html: associationOptions }}></select>
                <select onChange={this.updateCampaign} className='select' dangerouslySetInnerHTML={{ __html: campaignOptions }}></select>
              </div>
              <div id='edm-content' style={{ border: '1px solid black' }}>
                <ThemeProvider value={ this.getActiveTheme() }>
                  <Base
                    utms={this.getUtmString()}
                    preheader={this.state.preheader}>
                    {childs}
                  </Base>
                </ThemeProvider>
              </div>
            </div>
            <div className='column'>
              <div className={`editor editor--text`}>
                <div style={{ marginBottom: '1em' }}>
                  <h1 className='editor-header-1'>Editor</h1>
                  <DraftWYSIWYG
                    key={this.id}
                    content={this.state.editorContent}
                    updateEditable={this.updateEditable} />
                </div>
              </div>
              <div style={{ marginBottom: '1em' }}>
                <h1 className='editor-header-1'>Spawn Modules</h1>
                <ModuleSpawner
                  spawnChild={this.spawnChild}
                  despawnChild={this.despawnChild} />
              </div>
              <div style={{ marginBottom: '1em' }}>
                <h1 className='editor-header-1'>UTMs &amp; Preheader</h1>
                utm_medium=<input onChange={this.updateUtm} type='text' name='medium' defaultValue='Email' /><br />
                utm_source=<input onChange={this.updateUtm} type='text' name='source' defaultValue={this.state.assoc.toUpperCase()} /><br />
                utm_campaign<input onChange={this.updateUtm} type='text' name='campaign' defaultValue='Monthly' /><br />
                Preheader: <input onChange={this.onInputUpdate} type='text' name='preheader' defaultValue={'I\'ll be a header one day!'} />
              </div>
              <div style={{ marginBottom: '1em' }}>
               <h1 className='editor-header-1'>Export</h1>
                <textarea id='edm-html' /><br />
                <button onClick={this.getHtml}>Get HTML</button>
              </div>

            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default TemplatePicker