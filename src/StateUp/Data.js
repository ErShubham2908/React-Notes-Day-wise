import React, { useState } from 'react'
import Inc from './Inc'
import Dec from './Dec'

function Data() {
   const [data, setData] = useState(0);
  return (
    <div>
      <Inc value = {{data, setData}} />
      <Dec value = {{data, setData}} />
    </div>
  )
}

export default Data
