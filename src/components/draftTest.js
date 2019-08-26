import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

class DraftTest extends Component {
  constructor(props) {
    super(props);
    const contentBlock = htmlToDraft(this.props.content);
    this.state = {
      editorState: EditorState.createWithContent(ContentState.createFromBlockArray(contentBlock.contentBlocks))
    };
  }

  onEditorStateChange = (editorState) => {
    console.log('onEditorStateChange()');
    this.setState({
      editorState,
    });
    console.log('-----------');
  };

  onChange = () => {
    console.log('onChange()');
    const convertedContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    this.setState({ convertedContent, });
    this.props.updateEditable( convertedContent );
    console.log('-----------');
  }
  
  render() {
    console.log('DraftTest render');
    const { editorState } = this.state;

    return (
      <div className="demo-section">
        <div className="demo-section-wrapper">
          <div className="demo-editor-wrapper">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
              onChange={ this.onChange }
            />
            <textarea
              disabled
              className="demo-content no-focus"
              value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DraftTest;