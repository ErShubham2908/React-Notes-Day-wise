import React from 'react'

function DisplayFunc(props) {
  console.log(props);
  return (
    <div>
        <h1>{props.value.count}</h1>
      <button onClick={() => props.value.setCount('Yash')} >Yash</button>
      <button onClick={() => props.value.setCount('Nitin')} >Nitin</button>
      <button onClick={() => props.value.setCount("Amina")} >Amina</button>
    </div>
  )
}

export default DisplayFunc
