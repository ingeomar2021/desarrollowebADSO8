import { useState } from "react";

function ComponenteHook2() {
    const[color, setColor]=useState("red");

    return(
        <>
        <h1>My favorite color is:{color} </h1>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("orange")}>Orange</button>
        <button onClick={()=>setColor("brown")}>Brown</button>
        </>
    )
    
}

export default ComponenteHook2;