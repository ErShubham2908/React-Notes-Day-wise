import React, { useState } from 'react'
import DisplayFunc from './DisplayFunc';

function FuncVariable() {
    const [count, setCount] = useState(0);
  return (
    <>
        <DisplayFunc value = {{count, setCount}} /> 
    </>
  )
}

export default FuncVariable
