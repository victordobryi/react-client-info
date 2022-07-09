import React, { useState } from 'react';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import users from '../../public/data/users.json';
import Select from '../components/Select/Select';
import { useAppDispatch, useAppSelector } from '../redux-hooks';
import { sortSlice } from '../store/reducers/sortReducer';

const Main = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { cardsAmount } = useAppSelector((state) => state.sortReducer);
  const dispatch = useAppDispatch();
  const { changeCardsCount } = sortSlice.actions;

  const indexOfLastPost = currentPage * cardsAmount;
  const indexOfFirstPost = indexOfLastPost - cardsAmount;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  const togglePage = (currentPage: number) => {
    setCurrentPage(currentPage);
  };

  return (
    <div className='table'>
      <Table users={currentPosts} />
      <Pagination
        count={users.length}
        onClick={togglePage}
        cardsPerPage={cardsAmount}
        currentPage={currentPage}
      />
      <Select
        defaultValue={cardsAmount}
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 15, name: '15' },
          { value: 25, name: '25' },
          { value: 50, name: '50' },
        ]}
        onChange={(e) => dispatch(changeCardsCount(Number(e.target.value)))}
      />
    </div>
  );
};

export default Main;
