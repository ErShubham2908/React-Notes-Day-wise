import React, { useEffect, useState } from 'react'

function MouseCompo() {
    const [mouseCod, setMousecod] = useState({x:0, y: 0})

    const mouseMoveHandler = (event) => {
    	setMousecod({
      		x:event.clientX,
      		y:event.clientY
    	});
  	}
  		
  	useEffect(()=>{
    	window.addEventListener('mousemove', mouseMoveHandler);
        console.log('Event Called');
    	// return(()=>{
      	// 	window.removeEventListener('mousemove', mouseMoveHandler);
        //     console.log('Event Stop');
    	// })
  	},[])  

  return (
    <>
        Mouse Coordinates: x = {mouseCod.x}, y={mouseCod.y} 
    </>
  )
}

export default MouseCompo;