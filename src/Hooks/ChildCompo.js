import React, { memo } from 'react'

function ChildCompo({Learning}) {
    console.log('This is something..');
  return (
    <div>
      <h1>This is Child</h1>
      
      <button onClick={Learning} >Child Button</button>
    </div>
  )
}

export default memo(ChildCompo)
