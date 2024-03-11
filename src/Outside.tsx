import { useEditorRefContext } from './useEditorRefContext';

let count = 0;
export function OutSide() {
  const { editorRef } = useEditorRefContext() ?? {};

  count++;
  if (count > 500) {
    throw new Error('Infinite loop detected');
  }

  return (
    <div>
      <button onClick={() => editorRef?.current?.focus()}>Focus Editor</button>
    </div>
  );
}
