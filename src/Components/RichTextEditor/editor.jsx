import { $getRoot, $getSelection } from "lexical";
import { useState, useEffect } from "react";

import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";

import "./styles.css";
const theme = {
  // Theme styling goes here
};

// Catch error
function onError(error) {
  console.error(error);
}

const RichTextEditor = () => {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  function MyOnChangePlugin({ onChange }) {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        onChange(editorState);
      });
    }, [editor, onChange]);
    return null;
  }

  function onChange(editorState) {
    // save data to JSON
    const editorStateJSON = editorState.toJSON();
    // setEditorState(JSON.stringify(editorStateJSON));
    console.log("********", editorState);
  }

  const [editorState, setEditorState] = useState();
  
  return (
    <LexicalComposer initialConfig={initialConfig}>
      <PlainTextPlugin
        contentEditable={<ContentEditable className="contentEditable" />}
        placeholder={<div className="placeholder">Enter some text...</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <MyOnChangePlugin onChange={onChange} />
    </LexicalComposer>
  );
};

export default RichTextEditor;
