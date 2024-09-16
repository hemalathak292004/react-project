import React from "react";
const Content = () => {
    function handleNameChange(){
        const names=["earn","grow","give"]
        const int=Math.floor(Math.random()*3);
        return names[int];
    }
    const handleClick =() =>{
        console.log('thanks for the support')
    }
    const handleClick2 =(name) =>{
        console.log(`thanks for the support ${name}`)
    }
  return (
    <main>
    <p>let {handleNameChange()} Money</p>
    <button onClick={()=>handleClick2('hema')}>Subscribe</button>
    </main>
  )
}

export default Content