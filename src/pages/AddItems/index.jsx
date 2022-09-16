import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import Editor from '../../components/Editor';
import Price from '../../components/Price';

import axios from '../../axios';

import styles from './AddItems.module.scss';

const AddItems = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = React.useState('');
  const [image, setImage] = React.useState();
  const [imageUrl, setImageURL] = React.useState();
  const [content, setContent] = React.useState();
  const [status, setStatus] = React.useState('Активный');
  const [citiesPrice, setCitiesPrice] = React.useState();
  const [cityOne, setCityOne] = React.useState();
  const [cityTwo, setCityTwo] = React.useState();

  const isEdit = Boolean(id);

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

  React.useEffect(() => {
    if (isEdit) {
      axios.get(`/items/${id}`).then(({ data }) => {
        setTitle(data.name);
        setImageURL(data.imageUrl);
        setCitiesPrice(data.price);
        setContent(data.text);
        setStatus(data.status);
      });
    }
  }, []);

  const onSubmit = async () => {
    try {
      const fields = {
        name: title,
        price: citiesPrice,
        status,
        imageUrl,
        text: content,
      };

      if (isEdit) {
        await axios.patch(`/items/${id}`, fields);
        navigate('/');
      } else {
        if (fields.name && fields.price && fields.status && fields.imageUrl) {
          await axios.post('/items', fields);
          navigate('/');
        } else {
          alert('Пожалуйста, заполните все необходимые поля!');
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const saveCitiesPrice = () => {
    if (cityOne && cityTwo && !citiesPrice) {
      const arr = cityOne.concat(cityTwo);
      setCitiesPrice(arr);
      alert('Цены установлены');
    } else if (citiesPrice) {
      alert('Цены установлены');
    } else {
      alert('Не все цены установлены');
    }
  };

  const onClickCancel = () => {
    navigate('/');
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

  const onChangePrice = React.useCallback(
    (e) => {
      setCitiesPrice([{ name: 'all', price: e.target.value }]);
    },
    [citiesPrice],
  );

  return (
    <div className={styles.wrapp}>
      {imageUrl ? (
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
        onChangePrice={onChangePrice}
        saveCitiesPrice={saveCitiesPrice}
        citiesPrice={citiesPrice}
        setCityOne={setCityOne}
        setCityTwo={setCityTwo}
      />
      <div className={styles.status}>
        <span>Статус товара: {status}</span>
        <select size="2" defaultValue={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Активный">Активный</option>
          <option value="Нет в наличии">Нет в наличии</option>
        </select>
      </div>
      <Editor onChangeText={onChangeText} content={content} />
      <div className={styles.btngroup}>
        <button className={styles.cancel} onClick={onClickCancel}>
          Отмена
        </button>
        <button type="submit" className={styles.save} onClick={onSubmit}>
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default AddItems;
