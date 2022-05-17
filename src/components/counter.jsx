import React from "react";

const Counter= ()=>{

    let [count,setCount]=React.useState(0);
    let [color,setColor]=React.useState("red");
    if(count%2!=0)
         color="green" ;
    else    
        color="red"
  
       
    
    return (
            <div>
            
             <h1>Count Value :<span style={{color : color}}> {count}</span></h1>
             <button onClick={()=>{ setCount(count+1)}}> Increment</button>
             <button onClick={()=>{ setCount(count-1)}}> Decrement</button>
             <button onDoubleClick= {()=>{ setCount(count*2)}}> Double Click</button>
        </div>
    )
}
export {Counter};