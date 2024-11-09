import React, { useMemo } from 'react';
import Chart from './Chart';

const calculateReport = (item) => {
    // complex calculation
    return item.data.map(value => value * 2); // Example calculation
  };

const Report = ({item}) => {

    const data=useMemo(calculateReport(item),[item])
   

  return (
    <div>
      <h2>{item.name}</h2>
      <Chart data={data}/>
    </div>
  )
}

export default Report
