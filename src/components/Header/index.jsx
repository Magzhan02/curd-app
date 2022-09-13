import React from 'react';

import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <h1>Товары</h1>
      <button className={styles.btn}>Добавить</button>
    </div>
  );
};

export default Header;
