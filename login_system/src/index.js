import React from "react";
//import  ReactDOM  from "react";
import ReactDOM from 'react-dom';
import Localtime from "./components/Localtime";
import User from "./components/User";

//render
ReactDOM.render(
   <React.StrictMode>
        <Localtime /> 
         {/* <User></User>  */}
        
      
        
    </React.StrictMode>,
    document.getElementById("root")
)