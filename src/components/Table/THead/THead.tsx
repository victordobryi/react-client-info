import React from 'react';
import { ITHead } from '../../../models/THead';

const THead = ({ theadData }: ITHead) => {
  return (
    <thead>
      <tr className='table__head'>
        {theadData.map((name, index) => (
          <th key={index}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default THead;
