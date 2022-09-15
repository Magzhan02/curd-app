import React from 'react';

import ItemsBlock from '../../components/ItemsBlock';

import { fetchProduct } from '../../redux/items/asyncAction';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const { currentPage } = useSelector((state) => state.items);
  React.useEffect(() => {
    const fetchItemsData = async () => {
      dispatch(
        fetchProduct({
          currentPage,
        }),
      );
    };
    fetchItemsData();
  }, [dispatch, currentPage]);

  return (
    <div className="home">
      <ItemsBlock />
    </div>
  );
};

export default Home;
