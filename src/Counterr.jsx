import React, { useState } from 'react'





function Counterr() {

  return (
    <div>
       <Countt/>
    </div>
  )
}

function Countt (){
  
  const [count,setCount] = useState(0)

  return <div>
  {count}
  <Increase setCount = {setCount}/>
  <Decrease setCount = {setCount} />
  </div>
}


function Increase ({setCount}){

  function inc (){
    setCount(c => c+1)
  }

  return <div>
    <button onClick={inc}>Increase</button>
  </div>
}
 

function Decrease ({setCount}){
  function dec (){
    setCount(c => c-1)
  }

  return <div>
    <button onClick={dec}>Decrease</button>
  </div>
}
 
export default Counterr