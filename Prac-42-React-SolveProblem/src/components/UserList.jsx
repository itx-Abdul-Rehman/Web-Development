import React from 'react'
import { useState, useEffect } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await response.json();
            await setUsers(data);
        }

        fecthData();

    }, [])



    return (
        <div className='flex flex-wrap'>
            {users.map(user =>
                <div key={user.userId} className='m-3 w-[275px] border rounded-md border-black h-[300px]'>
                    <div>{user.id}</div>
                    <div>{user.title}</div>
                    <div>{user.body}</div>
                </div>
            )}


        </div>
    )
}

export default UserList
