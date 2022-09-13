import React from 'react';
import axios from 'axios';

import styles from './ItemsBlock.module.scss';

import ProductSection from './ProductSection';
import Search from './Search';
import Pagination from './Pagination/Pagination';

const ItemsBlock = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    try {
      const getProduct = async () => {
        const { data } = await axios.get('https://6320a58ae3bdd81d8eff1015.mockapi.io/items', {
          params: {
            page: 1,
            limit: 5,
          },
        });
        setData(data);
      };
      getProduct();
    } catch (error) {
      console.warn(error);
    }
  }, []);

  return (
    <header className={styles.container}>
      <Search />
      <section className={styles.header}>
        <div className={styles.title}>Название</div>
        <div className={styles.status}>Статус</div>
        <div className={styles.price}>Цена</div>
      </section>
      {data && data.map((obj) => <ProductSection data={obj} key={obj.id} />)}
      <Pagination />
    </header>
  );
};

export default ItemsBlock;
