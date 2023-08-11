import axios from 'axios'
import React, { useEffect, useState } from 'react'

function APICompo() {
    const [val, setVal] = useState('')
    const [names, setNames] = useState('')
    const [city, setCity] = useState('')
    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${names}&appid=dfae3024842a0e8689be622a40aef677`).then((data) => {
        setVal(data.data)        
    }).catch((err) => {
        console.log(err);
    })
    console.log('Hello');
}, [])

const handleUpdate = () => {
    setNames(city)
}
console.log(val);
  return (
    <>
        <input type='text' placeholder='Enter City' name='city'   onChange={(e) => setCity(e.target.value)} />
       <h1>City Temp. {val && parseInt((val.main.temp) - 273) } deg</h1>
       <h1>City Name - {val && ((val.name)) } </h1>
       <button onClick={handleUpdate} >Click</button>
    </>
  )
}

export default APICompo;