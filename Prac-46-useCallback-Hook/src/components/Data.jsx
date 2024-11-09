import React, { memo } from 'react'

const Data = ({username}) => {
  return (
    <div>
 
      <h1>Username:{username}</h1>
      {console.log(username)}

    </div>
  )
}

export default memo(Data)
