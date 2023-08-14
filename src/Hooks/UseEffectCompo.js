import React, { useEffect, useState } from 'react'

function UseEffectCompo() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('EA23')
    const [width, setWidth] = useState(window.screen.width);
    console.log(width);
    // console.log(count, name);

    // useEffect(() => {
    //     console.log('Call UseEffect - 1');
    // }, [name])

    // useEffect(() => {
    //     console.log('Call UseEffect - 2');
    // }, [count])

    const resizedScreen = () => {
      setWidth(window.innerWidth)
    }
    useEffect(() => {
      window.addEventListener('resize', resizedScreen )
      console.log('Add Event');
      return () => {
        window.removeEventListener('resize', resizedScreen)
        console.log('Remove Event');
      }
    }, [width])
    
  return (
    <>

      <h2>My screen size : </h2>
      <h3>{width} px</h3>
      {/* <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <h2>{name}</h2>
      <button onClick={() => setName('India')}>Change Name</button> */}
    </>
  )
}

export default UseEffectCompo
