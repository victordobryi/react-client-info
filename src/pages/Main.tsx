import React from 'react';
import Table from '../components/Table/Table';
import Pagination from '../components/Pagination/Pagination';
import users from '../../public/data/users.json';
import Select from '../components/Select/Select';

const Main = () => {
  return (
    <div className="table">
      <Table users={users} />
      <Pagination
        count={users.length}
        onClick={() => ''}
        cardsPerPage={50}
        currentPage={1}
      />
      <Select
        defaultValue="25"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 15, name: '15' },
          { value: 25, name: '25' },
          { value: 50, name: '50' }
        ]}
      />
    </div>
  );
};

export default Main;
