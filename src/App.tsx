import { EditorRefPlugin } from '@lexical/react/LexicalEditorRefPlugin';
// import { FixedEditorRefPlugin } from './FixedEditorRefPlugin';

import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { EditorRefProvider, useEditorRefContext } from './useEditorRefContext';
import { OutSide } from './Outside';

function Editor() {
  const { onRef } = useEditorRefContext() ?? {};

  return (
    <>
      {onRef !== undefined && <EditorRefPlugin editorRef={onRef} />}
      {/* {onRef !== undefined && <FixedEditorRefPlugin editorRef={onRef} />} */}
    </>
  );
}

function App() {
  const initialConfig: InitialConfigType = {
    namespace: 'hello',
    onError: error => {
      throw error;
    },
  };

  return (
    <EditorRefProvider>
      <LexicalComposer initialConfig={initialConfig}>
        <Editor />
      </LexicalComposer>

      <OutSide />
    </EditorRefProvider>
  );
}

export default App;
