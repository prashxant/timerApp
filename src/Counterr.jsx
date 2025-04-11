import React, { useState } from 'react'





function Counterr() {

    const [count,setCount] = useState(0)

    function Inc (){
     setCount((c)=> c+1)
    }
    
    function Dic (){
        setCount((c)=> c-1)
    }
    
  return (
    <div>
        <button onClick={Inc}>Increse</button>
        <button onClick={Dic}>Decrease</button>
        <div>{count}</div>
    </div>
  )
}

export default Counterr