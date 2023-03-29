import styles from './Login.module.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import{FaUserEdit} from 'react-icons/fa'
import{RiLockPasswordLine} from 'react-icons/ri'
export default function Login(){
  const navigate = useNavigate();
    return(
        <>
        <h1>Login</h1>
        <button onClick={()=>navigate("/")}>Welcome to home!</button>
        <div className={styles.Login}>
      <FaUserEdit/>  <input type ="text" placeholder="username">
        
        </input><br></br><br></br><br></br>
       <RiLockPasswordLine/> <input  type="text" placeholder="Enter your password"></input><br></br>
        <button>Log in</button><br></br>
         <p>Dont't have account?<br></br> 
        <Link to ="./register">Register</Link></p>
        </div>
        
        </>
    )
}