import React, { useState } from 'react'

function HocCompo() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)} >Click Here</button>
    </>
  )
}

export default HocCompo
