import React, { useEffect, useState } from 'react'
import axios from 'axios';

function RandomUserId() {

  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomUser = async () => {
    try{
      const response = await axios.get('https://randomuser.me/api/');
      console.log(response)
      setUser(response.data.results[0]);
      setIsLoading(false);
    }
    catch(error){
      setError(error.response.data);
      setIsLoading(false);
      }
  }
  useEffect(
    () => {
      fetchRandomUser();
      },[]
  )


  if(isLoading){
    return <p>Loading...</p>
  }
  if(error){
    return <p>{error}</p>
  }

  return (
    <div className='container'>
        <div className='img-con'> <img  src={user.picture.large}/></div>
      <p>{user.name.first} {user.name.last}</p>
      <p>Email:{user.email}</p>
      <p>Phone:{user.phone}</p>
      <button type='submit' onClick={fetchRandomUser}>Random Users</button>
      </div>
   
  )
}

export default RandomUserId