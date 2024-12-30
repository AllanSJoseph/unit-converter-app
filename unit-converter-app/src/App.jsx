import React from "react";
import ConvContainer from "./components/ConvContainer";
import "./App.css";

function App(){
  return (
    <>
    <div className="header">
      <h1>Unit Converter</h1>
      <p><strong>Created by: <a href="https://github.com/AllanSJoseph" target="_blank">Allan S Joseph</a></strong></p>
    </div>
    
    <br/>
    <ConvContainer />  
    </>
  )
}


export default App;