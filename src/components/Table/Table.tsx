import React from 'react';
import TBody, { IData } from './TBody/TBody';
import THead from './THead/THead';
import './Table.scss';
import titles from '../../../public/data/columnsNames';
import TRow from './TRow/TRow';

interface IUsers {
  users: IData[];
}

const Table = ({ users }: IUsers) => {
  return (
    <table className="table">
      <THead theadData={titles} />
      <tbody>
        {users.map(
          ({
            account,
            created_date,
            created_user,
            id,
            oguid,
            order_type,
            status,
            terminal
          }) => (
            <TRow
              key={id}
              id={id}
              account={account}
              created_date={created_date}
              created_user={created_user}
              oguid={oguid}
              order_type={order_type}
              status={status}
              terminal={terminal}
            />
          )
        )}
      </tbody>
      <TBody tbodyData={users} />
    </table>
  );
};

export default Table;
