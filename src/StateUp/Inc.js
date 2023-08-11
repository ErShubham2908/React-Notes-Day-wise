import React from 'react'
import '../Style.css'
function Inc(props) {
  return (
    <div>
        <h2>{props.value.data}</h2>
      <button onClick={() => props.value.setData(props.value.data + 1)  }className='btn' >Increment</button>
    </div>
  )
}

export default Inc
