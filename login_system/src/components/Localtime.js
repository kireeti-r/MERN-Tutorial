import React from "react";
import ReactDOM  from "react-dom";
function Localtime(){
    return(
         
        <div >
           <h2> From Localtime {setInterval(tiktok,1000)}</h2>
        </div>
    )
}
 function tiktok(){
    return ( 
  <h2>The local time is {new Date().toLocaleTimeString()}</h2>
    
  )
    }
    
//     return element;
//    //ReactDOM.render(element, document.getElementById("root"))  
   
// }
export default Localtime;