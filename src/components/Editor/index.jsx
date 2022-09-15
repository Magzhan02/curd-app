import React from 'react';

import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

import styles from './Editor.module.scss';

function Editor({ onChangeText, content }) {
  const options = React.useMemo(
    () => ({
      spellChecker: false,
      maxHeight: '400px',
      autofocus: true,
      placeholder: '',
      status: false,
      autosave: {
        enabled: true,
        delay: 1000,
        uniqueId: 'demo',
      },
    }),
    [],
  );
  return (
    <SimpleMDE
      className={styles.editor}
      value={content}
      onChange={onChangeText}
      options={options}
    />
  );
}

export default Editor;
