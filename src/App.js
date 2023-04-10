import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const greetings =["Good morning","Good Evening","Good Afternoon","Happy Birthday","happy aniverssary"]
  const [data,setData]=useState(0)
  const handledata =()=>{
    setData(data+1)
  }
  return (
    <div>
     
    <button onClick={handledata}>greetings</button>
    <h1>{greetings[data]}</h1>
    </div>
  );
}

export default App;
