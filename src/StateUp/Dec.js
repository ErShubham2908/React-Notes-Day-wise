import React from 'react'
import '../Style.css'
function Dec(props) {
  return (
    <div>
        <h2>{props.value.data}</h2>
      <button className='btn' onClick={() => props.value.setData(props.value.data - 1) } >Dec</button>
    </div>
  )
}

export default Dec
