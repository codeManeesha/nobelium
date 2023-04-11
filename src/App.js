import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {
  const[email,setEmail] =useState()
  const[userName,setUserName] =useState()
 
 const handleEmail=(e)=>{
  setEmail(e.target.value)
 }
 
 const handleUserName=(e)=>{
  setUserName(e.target.value)
 }





  return (
    
    <div className="body">
     <div className="content">
      <div className="content1">
      <form>
        <h1>Form</h1>
          <input id='em' type="text" placeholder="email" value={email} onChange={handleEmail}></input><br></br><br></br>
          <input type="text" placeholder="username" value={userName} onChange={handleUserName}></input><br></br><br></br>
         
          <button type ="submit">Add</button>
        </form>
       </div>
        <div className="content2">
      
          <h1>update contents</h1>
        
          <input placeholder='email'value={email}></input><br></br><br></br>
          <input placeholder='username'value={userName}></input><br></br><br></br>
          
        </div>
        </div>
        <div className="table">
          <table>
          <tr>
            
            <th>email</th>
            <th>username</th>
            
            
          </tr>
          <tr>
        <td>{email}</td>
        <td>{userName}</td>
          </tr>
         
          </table>
        </div>
      </div>
      
     
      
  

  );
}

export default App;
