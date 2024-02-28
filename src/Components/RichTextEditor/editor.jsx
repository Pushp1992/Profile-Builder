import { useState, useEffect } from "react";

import { $getRoot, $createTextNode, $getSelection, $isRangeSelection } from "lexical";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { HeadingNode, $createHeadingNode } from "@lexical/rich-text";
import {$setBlocksType} from '@lexical/selection';

import "./styles.css";
const theme = {
  heading: {
    h1: "my-editor-h1",
  },
  text: {
    bold: "my-editor-bold",
    italic: "my-editor-italic",
  },
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
    nodes: [HeadingNode],
  };

  const MyOnChangePlugin = ({ onChange }) => {
    const [editor] = useLexicalComposerContext();

    useEffect(() => {
      return editor.registerUpdateListener(({ editorState }) => {
        onChange(editorState);
      });
    }, [editor, onChange]);
    return null;
  };

  const HeadingPlugin = () => {
    const [editor] = useLexicalComposerContext();

    const onClick = () => {
      editor.update(() => {
        const selection = $getSelection();
        if($isRangeSelection(selection)) {
            console.log('************');
            $setBlocksType(selection, () => $createHeadingNode('h1'));

        }
      });
    };
    return <button onClick={onClick}>Heading</button>;
  };

  const onChange = (editorState) => {
    // save data to JSON
    const editorStateJSON = editorState.toJSON();
    // setEditorState(JSON.stringify(editorStateJSON));
    // console.log("********", editorStateJSON);
  };

  const [editorState, setEditorState] = useState();

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <HeadingPlugin />
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
