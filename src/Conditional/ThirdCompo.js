import React, { useState } from 'react'
import FirstCompo from './FirstCompo';
import SecondCompo from './SecondCompo';

function ThirdCompo() {
    const [value, setValue] = useState(false);
    console.log(value);
    // const handleFunc = () => {
    //     setValue(!value)
    // }
  return (
    <>
      <button onClick={() => setValue(!value)} >Change</button>
      {value ? <FirstCompo /> : <SecondCompo />}
               {/* true       :       false */}
    </>
  )
}

export default ThirdCompo
