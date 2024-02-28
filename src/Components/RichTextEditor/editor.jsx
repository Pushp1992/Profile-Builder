import { useState, useEffect } from "react";

import ExampleTheme from "./themes/ExampleTheme";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import TreeViewPlugin from "./plugins/TreeViewPlugin";
import ToolbarPlugin from "./plugins/ToolbarPlugin";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { TableCellNode, TableNode, TableRowNode } from "@lexical/table";
import { ListItemNode, ListNode } from "@lexical/list";
import { CodeHighlightNode, CodeNode } from "@lexical/code";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";

import "./styles.css";

function Placeholder() {
  return <div className="editor-placeholder">Enter some rich text...</div>;
}

const editorConfig = {
    // The editor theme
    theme: ExampleTheme,
    // Handling of errors during update
    onError(error) {
      throw error;
    },
    // Any custom nodes go here
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode
    ]
  };


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
//   const initialConfig = {
//     namespace: "MyEditor",
//     theme,
//     onError,
//     nodes: [HeadingNode],
//   };

//   const MyOnChangePlugin = ({ onChange }) => {
//     const [editor] = useLexicalComposerContext();

//     useEffect(() => {
//       return editor.registerUpdateListener(({ editorState }) => {
//         onChange(editorState);
//       });
//     }, [editor, onChange]);
//     return null;
//   };

//   const HeadingPlugin = () => {
//     const [editor] = useLexicalComposerContext();

//     const onClick = () => {
//       editor.update(() => {
//         const selection = $getSelection();
//         if($isRangeSelection(selection)) {
//             console.log('************');
//             $setBlocksType(selection, () => $createHeadingNode('h1'));

//         }
//       });
//     };
//     return <button onClick={onClick}>Heading</button>;
//   };

//   const onChange = (editorState) => {
//     // save data to JSON
//     const editorStateJSON = editorState.toJSON();
//     // setEditorState(JSON.stringify(editorStateJSON));
//     // console.log("********", editorStateJSON);
//   };

//   const [editorState, setEditorState] = useState();

  return (
    <LexicalComposer initialConfig={editorConfig}>
    <div className="editor-container">
      <ToolbarPlugin />
      <div className="editor-inner">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-input" />}
          placeholder={<Placeholder className="placeholder" />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <TreeViewPlugin />
        <AutoFocusPlugin />
        <CodeHighlightPlugin />
        <ListPlugin />
        <LinkPlugin />
        <AutoLinkPlugin />
        <ListMaxIndentLevelPlugin maxDepth={7} />
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
      </div>
    </div>
  </LexicalComposer>
  );
};

export default RichTextEditor;
