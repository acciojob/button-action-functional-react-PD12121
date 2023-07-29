import React, {Component, useState,useEffect} from "react";
import "./../styles/App.css";

function App() {
  const [showParagraph,setShowParagraph] = useState("");

  function showPara(){
    setShowParagraph("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }


  return (
    <div className="App" id="main">
      // Do not alter the main div
     <p>{showParagraph}</p>
     <button id="click" onClick={showPara} >Show Paragraph</button>
    </div>
  );
}


export default App;
