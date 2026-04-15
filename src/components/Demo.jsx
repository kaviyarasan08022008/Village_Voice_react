import React, { useState, useEffect } from 'react'

export default function Demo() {
  const [users, setUsers] = useState([]);

  async function getData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      console.log(data);
      setUsers(data)
    } catch (err) {
      console.log(err, "Error happened")
    }
  }

  useEffect(() => {
    getData();
  }, [])

      
      return   <div className='grid grid-cols-3 gap-[10px] ml-[35px] mt-[10px]'>
      <h1>User List</h1>
      {users.map((user) => (
        <div key={user.id} className='shadow-2xl border-1 p-[10px] rounded-xl'>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      ))}
    </div>
  
}