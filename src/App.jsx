import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {

const [play,setPlay] = useState(false)
const [count,setCount]= useState(0)

function handleClick(){
  setPlay( (c)=>!c)
 }

  useEffect(() => {
    if (!play) return;
    const interval = setInterval(() => {
      setCount((c) => c + 1);

    },1000);
    return () => clearInterval(interval);
  },[play])


function notok(){
  return(
    <div>
      <h2>Not Ok</h2>
    </div>
  )}


  return (
   <> 
   <div>{play? count: notok()}</div>
   <button onClick={handleClick}>
    {play? "Pause" : "Play"}
   </button>
   </>
  )
}

export default App