import React, { FC } from 'react';
import { getCurrentDate } from '../../../utils/getCurrentDate';
import { getNameInFormat } from '../../../utils/getNameInFormat';
import { getStatus } from '../../../utils/getStatus';
import { IData } from '../TBody/TBody';

const TRow: FC<IData> = ({
  account,
  created_date,
  created_user,
  id,
  oguid,
  order_type,
  status,
  terminal
}) => {
  return (
    <tr className="table__row">
      <td>
        <span>{`№${id}`}</span>
        <span>{getCurrentDate(created_date)}</span>
      </td>
      <td>
        <span>{order_type?.name}</span>
        <span>{getNameInFormat(created_user)}</span>
      </td>
      <td>
        <span>{account?.name}</span>
        <span>{terminal?.name}</span>
      </td>
      <td>{getStatus(status)}</td>
    </tr>
  );
};

export default TRow;
