import React, { useState } from 'react'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { counterAtom } from './store/atom/counter'




function Counterr() {

  return (
    <RecoilRoot>
       <Countt/>
   </RecoilRoot>
  )
}

function CC () {

 const count  = useRecoilValue(counterAtom)


  return <div>
    {count}
  </div>
}


function Countt (){

  return <div>
  <CC/>
  <Increase />
  <Decrease  />
  </div>
}


function Increase (){

  function inc (){
    setCount(c => c+1)
  }

  return <div>
    <button onClick={inc}>Increase</button>
  </div>
}
 

function Decrease (){
  function dec (){
    setCount(c => c-1)
  }

  return <div>
    <button onClick={dec}>Decrease</button>
  </div>
}
 
export default Counterr