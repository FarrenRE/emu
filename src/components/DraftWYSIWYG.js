import React, { Component } from 'react';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

class DraftWYSIWYG extends Component {
  constructor(props) {
    super(props);

    const blocksFromHtml = htmlToDraft(props.content);
    const { contentBlocks, entityMap } = blocksFromHtml;
    const contentState = ContentState.createFromBlockArray(contentBlocks, entityMap);
    const editorState = EditorState.createWithContent(contentState);
    this.state = { editorState: editorState };
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  onChange = () => {
    const convertedContent = draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    this.setState({ convertedContent, });
    this.props.updateEditable(convertedContent);
  }

  render() {
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
              onChange={this.onChange}
              spellCheck={true}
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

export default DraftWYSIWYG;