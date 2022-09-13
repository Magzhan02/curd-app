import React from 'react';

import styles from './ItemsBlock.module.scss';

const ProductSection = ({ data }) => {
  return (
    <section className={styles.items}>
      <div className={styles.img}>
        <img src={data.imageUrl} alt={data.name} />
      </div>
      <div className={styles.title}>{data.name}</div>
      <div className={styles.status}>{data.status}</div>
      <div className={styles.price}>{data.price} ₸</div>
      <div className={styles.controls}>
        <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#323232">
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
        </svg>
      </div>
    </section>
  );
};

export default ProductSection;
