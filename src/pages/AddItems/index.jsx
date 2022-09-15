import React from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Editor from '../../components/Editor';
import Price from '../../components/Price';

import { submitProduct } from '../../redux/items/asyncAction';

import styles from './AddItems.module.scss';

const AddItems = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState();
  const [imageUrl, setImageURL] = React.useState();
  const [content, setContent] = React.useState();
  const [show, setShow] = React.useState(false);
  const [onePrice, setOnePrice] = React.useState();

  const [citiesPrice, setCitiesPrice] = React.useState();
  const [cityOne, setCityOne] = React.useState();
  const [cityTwo, setCityTwo] = React.useState();

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

  const onSubmit = async () => {
    const fields = {
      name: title,
      price: onePrice ? onePrice : citiesPrice,
      status: 'Активный',
      imageUrl,
      text: content,
    };

    const onSubmitProduct = async () => {
      dispatch(submitProduct(fields));
      navigate('/');
    };
    onSubmitProduct();
  };

  const saveCitiesPrice = () => {
    if (onePrice) {
      alert('Цены установлены');
    } else if (cityOne && cityTwo) {
      const arr = cityOne.concat(cityTwo);
      setCitiesPrice(arr);
      alert('Цены установлены');
    } else {
      alert('Не все цены установлены');
    }
  };

  const onChangeText = React.useCallback(
    (value) => {
      setContent(value);
    },
    [content],
  );

  const onClickRemoveImage = () => {
    setImage('');
  };

  const onChangeTitle = React.useCallback(
    (e) => {
      setTitle(e.target.value);
    },
    [title],
  );

  const onChangeInput = React.useCallback(
    (e) => {
      setShow(e.target.checked);
    },
    [show],
  );

  const onChangePrice = React.useCallback(
    (e) => {
      setOnePrice(e.target.value);
    },
    [onePrice],
  );

  return (
    <div className={styles.wrapp}>
      {image ? (
        <div className={styles.img}>
          <img src={imageUrl} alt={title} />
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
      <Price
        onChangeInput={onChangeInput}
        onChangePrice={onChangePrice}
        saveCitiesPrice={saveCitiesPrice}
        setCityOne={setCityOne}
        setCityTwo={setCityTwo}
        show={show}
      />
      <Editor onChangeText={onChangeText} content={content} />
      <div className={styles.btngroup}>
        <button className={styles.cancel}>Отмена</button>
        <button className={styles.save} onClick={onSubmit}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default AddItems;
