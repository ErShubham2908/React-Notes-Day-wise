import React, { useMemo, useState } from 'react'

function UseMemoCompo() {
    const [count, setCount] = useState(0);
    const [rate, setRate] = useState(100);

    function callMemo(){
        console.log('call memo');
    }

    useMemo(() => {
        console.log(' useMemo called....');
    }, [count])

    
  return (
    <>
      <h2>Hello useMemo Hooks</h2>
        {/* {callMemo()} */}
        {/* {useMemoFunc} */}
        
        <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)} >Count Inc</button>
        <h2>{rate}</h2>
      <button onClick={() => setRate(rate + 100)}>Rate Inc</button>
    </>
  )
}

export default UseMemoCompo