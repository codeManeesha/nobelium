import logo from './logo.svg';
import './App.css';
import Lucky from './Components/Lucky';
import {Routes,Route} from "react-router-dom"
import Home from './Components/Home'
import Login from './Components/Login'
import About from './Components/About'
import Register from './Components/Register'


function App() {
  return (
    <>
    <div className="App">
 <Routes>
    <Route path ='/' Component={Home}/>
    <Route path ='/login' Component={Login}/>
    <Route path='/about' Component={About}/>
    <Route path='/login/register' Component={Register}/>
    <Route path='/' Component={Home}/>
   </Routes>
    
    </div>
    <Lucky/>
    </>
  );
}

export default App;
