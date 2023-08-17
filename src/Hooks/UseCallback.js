import React, { useCallback,  useState } from 'react'
import ChildCompo from './ChildCompo'

function UseCallback() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState(0)
    const learning = useCallback(() => {
        setData(data + 5)
    }, [data])
      
  return (
    <>
    <ChildCompo Learning = {learning} />
    <h2>{count}</h2>
    <h1>{data}</h1>
     <button onClick={() => setCount(count + 1)} >incre</button> 
    </>
  )
}

export default UseCallback



function Sum(a, b){
  return a+b
}

function Display(name, age){
  console.log(`Name is : ${name} and ${age} old`);
}

Display('EA23', Sum(10, 13))