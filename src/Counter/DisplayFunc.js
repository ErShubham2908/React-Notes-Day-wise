import React from 'react'

function DisplayFunc(props) {
    console.log(props);
  return (
    <>
        <h1>{props.value.count}</h1>
      <button onClick={() => props.value.setCount(props.value + 1)}>Increment</button>
      <button>Decrement</button>
    </>
  )
}

export default DisplayFunc
