import Select from 'react-select'
import {useState} from 'react'
import './App.css';

function App() {
  const[value,Setvalue]=useState(null)
  const option=[
    {value:'apple',label:'apple'},
    {value:'banana',label:'banana'},
    {value:'litchi',label:'litchi'},
    {value:'mango',label:'mango'},
    {value:'papaya',label:'papaya'}
  ]
  return (
  
    <div style={{margin:20,width:200}}>
   <Select options={option} defaultValue={value} placeholder="select option" onChange={Setvalue} isSearchable/>
    </div>
 
  );
}

export default App;
