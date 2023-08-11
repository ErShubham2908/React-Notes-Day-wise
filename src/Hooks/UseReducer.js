import React, { useReducer } from 'react';
import '../Style.css'

const initialState = 0;

const reducer = (state, action) => {
    switch(action){
        case "Increment":
            return state + 1
        case 'Decrement':
            return state - 1
        default:
            return state
    }
}

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
        <h1>{count}</h1>
      <button className='btn' onClick={() => dispatch('Increment') }  >Increment</button>
      <button className='btn' onClick={() => dispatch('Decrement')}>Decrement</button>
    </div>
  )
}

export default UseReducer
