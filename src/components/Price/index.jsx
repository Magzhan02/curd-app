import React from 'react';

import styles from './Price.module.scss';

const Price = ({ onChangeInput, onChangePrice, saveCitiesPrice, setCityOne, setCityTwo, show }) => {
  return (
    <div className={styles.price}>
      <span>Цена</span>
      <div className={styles.block}>
        <div className={styles.checkbox}>
          <input type="checkbox" name="price" onChange={onChangeInput} />
          <span>Одна цена для всех городов</span>
        </div>
        <input
          type="number"
          className={styles.count}
          placeholder="Цена"
          onChange={(e) => onChangePrice(e)}
        />
      </div>
      {!show && (
        <div className={styles.cities}>
          <div className={styles.head}>
            <span>Города</span>
            <span>Цена</span>
          </div>
          <div className={styles.name}>
            <span>Астана</span>
            <input
              type="number"
              placeholder="Цена"
              name="Астана"
              onChange={(e) => setCityOne([{ name: e.target.name, price: e.target.value }])}
            />
          </div>

          <div className={styles.name}>
            <span>Алматы</span>
            <input
              type="number"
              placeholder="Цена"
              name="Алматы"
              onChange={(e) => setCityTwo([{ name: e.target.name, price: e.target.value }])}
            />
          </div>
        </div>
      )}
      <button onClick={saveCitiesPrice}>Сохранить</button>
    </div>
  );
};

export default Price;
