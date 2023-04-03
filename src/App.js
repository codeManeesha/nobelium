
import './App.css';
import {RecoilRoot} from 'recoil'
import AddTask from './Components/Task'
import HomePage from './Components/Home';
import{Routes,Route} from 'react-router-dom'


function App() {
  return (
 <>
 <div className='App'>
 <RecoilRoot>
  <Routes>
    <Route path='/' Component={HomePage}></Route>
    <Route path='/task' Component={AddTask}></Route>
  </Routes>
 </RecoilRoot>

 </div>
 </>
  );
}

export default App;
