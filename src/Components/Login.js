import styles from './Login.module.css'
import {Link} from 'react-router-dom'
export default function Login(){
    return(
        <>
        <h1>Login</h1>
        <div className={styles.Login}>
        <input type ="text" placeholder="Enter your username">
        
        </input><br></br><br></br><br></br>
        <input  type="text" placeholder="Enter your password"></input><br></br>
        <button>Log in</button><br></br>
         <p>Dont't have account?<br></br> 
        <Link to ="./register">Register</Link></p>
        </div>
        
        </>
    )
}