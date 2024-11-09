import React from 'react'
import Report from './Report'

const ReportList = ({items}) => {
  return (
    <div>
       {
        items.map(item=>{
            <Report key={item.key} item={item} />
        })
       }
    </div>
  )
}

export default ReportList
