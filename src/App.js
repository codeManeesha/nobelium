import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const[number,setNumber] =useState(Math.floor(Math.random()*100))
  const changeNumber =()=>{
    setNumber(Math.floor(Math.random()*100))
  }
  return (
    <div>
   <table>
    <tr>
      <th>random number</th>
    </tr>
    <tr>
      <td>{number}</td>
    </tr>
   </table>
   <button onClick={changeNumber}>update number</button>
    </div>
  );
}

export default App;
