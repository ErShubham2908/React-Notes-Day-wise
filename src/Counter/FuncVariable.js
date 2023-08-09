import React, { useState } from 'react'
import DisplayFunc from './DisplayFunc';

function FuncVariable() {
  const [count, setCount] = useState("Shubham");
  return (
    <div>
      <DisplayFunc value = {{count, setCount}} />
    </div>
  )
}

export default FuncVariable
