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
      <span>{editorRef?.current?._config.namespace}</span>
    </div>
  );
}
