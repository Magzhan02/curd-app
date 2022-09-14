import React from 'react';

import styles from './Pagination.module.scss';

const Pagination = ({ onChangePage, currentPage }) => {
  return (
    <section className={styles.pagination}>
      <div className={styles.btn} onClick={() => onChangePage(1)}>
        <img src="./assets/right-arrow.svg" alt="arrow-prev" className={styles.prev} />
        <div className={styles.button}>Previous</div>
      </div>
      <span>{currentPage}</span>
      <div className={styles.btn} onClick={() => onChangePage(2)}>
        <div className={styles.button}>Next</div>
        <img src="./assets/right-arrow.svg" alt="arrow-next" className={styles.next} />
      </div>
    </section>
  );
};

export default Pagination;
