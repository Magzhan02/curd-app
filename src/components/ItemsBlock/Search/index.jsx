import React from 'react';
import { FiX } from 'react-icons/fi';

import styles from './Search.module.scss';

const Search = ({ onChangeSearch }) => {
  return (
    <div className={styles.search}>
      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        fill="#323232"
        className={styles.icon}>
        <path
          d="M29.71,28.29l-6.5-6.5-.07,0a12,12,0,1,0-1.39,1.39s0,.05,0,.07l6.5,6.5a1,1,0,0,0,1.42,0A1,1,0,0,0,29.71,28.29ZM14,24A10,10,0,1,1,24,14,10,10,0,0,1,14,24Z"
          fill="#323232"
        />
      </svg>
      <input type="text" placeholder="Поиск товаров" onChange={(e) => onChangeSearch(e)} />
      <FiX className={styles.clear} />
    </div>
  );
};

export default Search;
