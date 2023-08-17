import React from 'react'
import { useLocation } from 'react-router-dom'
import Location from './Location';

function Signin() {
  const data = useLocation();
  console.log(data);
  return (
    <>
        <h1>This is Signin</h1> 
        {data.pathname === '/signin' ? <Location /> : "This is invalid URL"}
    </>
  )
}

export default Signin
