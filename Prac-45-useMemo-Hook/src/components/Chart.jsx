import React from 'react';

const Chart = ({ data }) => {
  return (
    <div>
      <h3>Chart Data</h3>
      <ul>
        {data.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default Chart
