import React, { useEffect, useState } from 'react'

function UseeffectH() {
  const [count, setCount] = useState(window.screen.width);

    const handleScreen = () => {
        
    }
    useEffect(() => {
        console.log('useEffect Count');
    }, [])

    useEffect(() => {
        console.log('useEffect');
    })

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleScreen} >Increment</button>
    </div>
  )
}

export default UseeffectH
