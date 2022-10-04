import React from 'react';
import { FiX, FiSearch } from 'react-icons/fi';

import styles from './Search.module.scss';

const Search = ({ onChangeSearch, searchValue, clearSearch }) => {
  return (
    <div className={styles.search}>
      <FiSearch className={styles.icon} />
      <input
        type="text"
        value={searchValue}
        placeholder="Поиск товаров"
        onChange={(e) => onChangeSearch(e)}
      />
      <FiX className={styles.clear} onClick={clearSearch} />
    </div>
  );
};

export default Search;
