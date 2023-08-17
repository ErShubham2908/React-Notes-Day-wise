import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Signin from './Singin'

function Rcompo() {
  return (
    <>
        <BrowserRouter>
        <NavLink to='/' >Home</NavLink>
        <NavLink to='/signin'>Signin</NavLink>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signin' element={<Signin/>} />
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default Rcompo
