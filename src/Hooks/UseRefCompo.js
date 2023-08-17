import React, { useRef, useState } from 'react'

function UseRefCompo() {
  const refData = useRef(null);
//   const [name, setName] = useState('EA23')
  console.log(refData);
  const resetFunc = () => {
    // setName('EA24')
    refData.current.focus();
    refData.current.style.backgroundColor = 'red'
  }
  return (
    <>
        <h1>This is useRef compo</h1> 
        <input ref={refData}  />
        <button onClick={resetFunc} >Reset</button>
    </>
  )
}

export default UseRefCompo
