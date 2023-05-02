import "./App.css";
import { useState } from "react";

function App() {
  const [val, setVal] = useState("");
  const [data, setData] = useState();
  const pack = [
    "Express",
    "Async.js",
    "Grunt",
    "PM2",
    "Socket.IO",
    "Commander.js",
  ];
  function handleSubmit() {

    localStorage.setItem("content", JSON.stringify([data]));
    setData("");
  }
  return (
    <div className="App">
      <input
        list="pack"
        placeholder="search"
        onChange={(e) => setVal(e.target.value)}
      />
      <datalist id="pack">
        {pack.map((op) => (
          <option>{op}</option>
        ))}
      </datalist>
      <div>
        <p>{val}</p>
        <input id="input" placeholder='discription'value={data}onChange={(e) => setData(e.target.value)} />
      </div>
      <button id="button" onClick={handleSubmit}>
        submit
      </button>
     
    </div>
  );
}

export default App;
