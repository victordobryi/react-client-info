import React from 'react';

export interface ITHeadData {
  name: string;
}

interface ITHead {
  theadData: string[];
}

const THead = ({ theadData }: ITHead) => {
  return (
    <thead>
      <tr className="table__head">
        {theadData.map((name, index) => (
          <th key={index}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default THead;
