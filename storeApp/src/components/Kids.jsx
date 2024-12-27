import React, { useContext } from 'react'
import UserContext from '../context/UseContext'

const Kids = () => {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <div>
      <h1 > {user.name}</h1>
    </div>
  )
}

export default Kids
