import React, {useState} from 'react'

function UseStateCompo() {
    const [names, setNames] = useState("EA23")
    // names = EA23
    console.log(names);
  return (
    <div>
      <h1>useState Hooks Called</h1>
      <h3>{names}</h3>
      <button onClick={() => setNames('Niyaz') } >Niyaz</button>
    </div>
  )
}

export default UseStateCompo