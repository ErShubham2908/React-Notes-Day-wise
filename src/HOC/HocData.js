import React from 'react'
import { HOCgreen, HOCred } from './Child'
import HocCompo from './HocCompo'

function HocData() {
  return (
    <div>
      <HOCred data = {HocCompo } />
      <HOCgreen  data = {HocCompo }/>
    </div>
  )
}

export default HocData
