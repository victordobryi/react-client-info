import React from 'react';
import TRow from '../TRow/TRow';

interface OrderType {
  name: string;
  oguid: string;
}

interface User {
  surname: string;
  name: string;
  patronymic: string;
  oguid: string;
}

export interface IData {
  id: number;
  oguid: string;
  status: string;
  order_type: OrderType;
  terminal: OrderType;
  account: OrderType;
  created_user: User;
  created_date: number;
}

interface ITBody {
  tbodyData: IData[];
}

const TBody = ({ tbodyData }: ITBody) => {
  return (
    <tbody>
      {tbodyData.map(
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
  );
};

export default TBody;
