import React, { useEffect, useState } from 'react';

function App() {
 const [clock , setClock] =  useState(0);
const [toggle,setToggle] = useState(false)


useEffect(()=>{

const interval  = setInterval(() => {

  setClock(c => c+1);
  
},1000)

return () =>{ clearInterval(interval)}

},[])





 function Player (){
  setToggle((p) => !p)

 }

 function Reset () {
  setClock(0)

 }


  return (
    <div >
      <div>{clock}</div>
     <button onClick={Player}>{toggle ? "Pause" : "Start"}</button>
     <button onClick={Reset}>Reset</button>
      
    </div>
  );
}

export default App;
