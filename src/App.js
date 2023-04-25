import "./App.css";
import React from "react";
import Button from "./Button";
import Table from "./Table";

function App() {
  const buttonNames = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
  ];

  return (
    <>
      <div className="App">
         {buttonNames.map((buttonName) => (
          <Button key={buttonName} name={buttonName} />
        ))}
        <Table /> 
        
      </div>
    </>
  );
}

export default App;
