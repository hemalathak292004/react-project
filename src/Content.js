import React from "react";
import { useState } from "react";
const Content = () => {
    function handleNameChange(){
        const names=["earn","grow","give"]
        const int=Math.floor(Math.random()*3);
        return names[int];
    }
    const handleClick =(e) =>{
        console.log(e.target.innerText)
    }
    const handleClick2 =(name) =>{
        console.log(`thanks for the support ${name}`)
    }
  return (
    <main>
    <p onDoubleClick={()=>handleClick2('sri')}>let {handleNameChange()} Money</p>
    <button onClick={(e)=>handleClick(e)}>Subscribe</button>
    </main>
  )
}

export default Content