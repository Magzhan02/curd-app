import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <Link to="/">
        <h1>Товары</h1>
      </Link>
      <Link to="addItems">
        <button className={styles.btn}>Добавить</button>
      </Link>
    </div>
  );
};

export default Header;
