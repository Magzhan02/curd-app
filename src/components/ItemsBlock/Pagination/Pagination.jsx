import React from 'react';

import styles from './Pagination.module.scss';

const Pagination = () => {
  return (
    <section className={styles.pagination}>
      <div className={styles.btn}>
        <img src="./assets/right-arrow.svg" alt="arrow-prev" className={styles.prev} />
        <button>Previous</button>
      </div>
      <span>1</span>
      <div className={styles.btn}>
        <button>Next</button>
        <img src="./assets/right-arrow.svg" alt="arrow-next" className={styles.next} />
      </div>
    </section>
  );
};

export default Pagination;
