import React from 'react';

import { useDispatch } from 'react-redux';
import { FiX, FiEdit2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import styles from './ItemsBlock.module.scss';

import { deleteItems } from '../../redux/items/asyncAction';

const ProductSection = ({ data }) => {
  const dispatch = useDispatch();

  const onClickDelete = () => {
    dispatch(deleteItems(data.id));
  };
  return (
    <section className={styles.items}>
      <div className={styles.img}>
        <img src={data.imageUrl} alt={data.name} />
      </div>
      <div className={styles.title}>{data.name}</div>
      <div className={styles.status}>{data.status}</div>
      <div className={styles.price}>{data.price[0].price} ₸</div>
      <div className={styles.controls}>
        <Link to={`/addItems/${data.id}/edit`}>
          <FiEdit2 />
        </Link>
        <FiX onClick={onClickDelete} />
      </div>
      {data.text && (
        <div className={styles.descr}>
          <p>{data.text}</p>
        </div>
      )}
    </section>
  );
};

export default ProductSection;
