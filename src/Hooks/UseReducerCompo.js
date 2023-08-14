import React, { useReducer } from 'react'

const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case "increment":
            return state + 5
        case 'Decrement':
            return state - 3
        default :
            return state
    }
}

function UseReducerCompo() {
    const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <>
        <h1>Hello useReducer</h1>
        <h2>{count}</h2>
        <button onClick={() => dispatch('increment') }>Increment</button>
        <button onClick={() => dispatch('Decrement')} >Decrement</button>
    </>
  )
}

export default UseReducerCompo
