import React from 'react'
import ReportList from './ReportList';

const ReportDashboard = () => {
    const items = [
        { id: 1, name: 'Sales Report', data: [100, 200, 300] },
        { id: 2, name: 'Inventory Report', data: [400, 500, 600] },
        { id: 3, name: 'User Activity', data: [700, 800, 900] },
      ];
  return (
    <div>
        <h1>Report Dashboard</h1>
        <ReportList items={items}/>
    </div>
  )
}

export default ReportDashboard
