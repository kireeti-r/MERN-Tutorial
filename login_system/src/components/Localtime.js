import React from "react";
import ReactDOM  from "react-dom";
function Localtime(){
    return(
        <div className="App">
           <h2> {setInterval(tiktok,1000)}</h2>
        </div>
    )
}
function tiktok(){
    const element=( 
    <h2>The local time is {new Date().toLocaleTimeString()}</h2>
    
    )
    
    
   ReactDOM.render(element, document.getElementById("root"))    
}
export default Localtime;