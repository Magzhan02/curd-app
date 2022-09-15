import React from 'react';

import { Link } from 'react-router-dom';

import { convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './AddItems.module.scss';

const AddItems = () => {
  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState();
  const [imageURL, setImageURL] = React.useState();
  const [editorState, setEditorState] = React.useState();
  const [content, setContent] = React.useState();

  const inputRef = React.useRef(null);
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };

  const handleChangeFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setImage(file);
    fileReader.readAsDataURL(file);
  };

  const onClickRemoveImage = () => {
    setImage('');
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styles.wrapp}>
      {image ? (
        <div className={styles.img}>
          <img src={imageURL} alt={title} />
          <button className={styles.delete} onClick={onClickRemoveImage}>
            Удалить файл
          </button>
        </div>
      ) : (
        <div className={styles.img}>
          <button className={styles.download} onClick={() => inputRef.current.click()}>
            Загрузить файл
          </button>
          <input ref={inputRef} type="file" onChange={handleChangeFile} hidden />
        </div>
      )}
      <div className={styles.title}>
        <input
          onChange={(e) => onChangeTitle(e)}
          value={title}
          type="text"
          className={styles.inpt}
          placeholder="Название товара"
        />
      </div>

      <Editor
        editorState={editorState}
        wrapperClassName={styles.card}
        editorClassName={styles.body}
        placeholder="Описание товара"
        onEditorStateChange={(newState) => {
          setEditorState(newState);
          setContent(draftToHtml(convertToRaw(newState.getCurrentContent())));
        }}
        toolbar={{
          options: [
            'inline',
            'blockType',
            'fontSize',
            'list',
            'textAlign',
            'history',
            'embedded',
            'emoji',
            'image',
          ],
          inline: { inDropdown: true },
          list: { inDropdown: true },
          textAlign: { inDropdown: true },
          link: { inDropdown: true },
          history: { inDropdown: true },
        }}
      />
    </div>
  );
};

export default AddItems;
