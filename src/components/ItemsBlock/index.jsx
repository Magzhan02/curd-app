import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/items/slice';

import styles from './ItemsBlock.module.scss';

import ProductSection from './ProductSection';
import Search from './Search';
import Pagination from './Pagination/Pagination';

const ItemsBlock = () => {
  const dispatch = useDispatch();
  const { items, currentPage } = useSelector((state) => state.items);
  const [searchValue, setSearchValue] = React.useState('');

  const onChangePage = (value) => {
    if (value !== currentPage) {
      dispatch(setCurrentPage(value));
    }
  };

  const onChangeSearch = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header className={styles.container}>
      <Search onChangeSearch={onChangeSearch} />
      <section className={styles.header}>
        <div className={styles.title}>Название</div>
        <div className={styles.status}>Статус</div>
        <div className={styles.price}>Цена</div>
      </section>
      {items &&
        items
          .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((obj) => <ProductSection key={obj.id} data={obj} />)}
      <Pagination onChangePage={onChangePage} currentPage={currentPage} />
    </header>
  );
};

export default ItemsBlock;
