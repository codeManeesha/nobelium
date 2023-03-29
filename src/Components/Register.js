import styles from './Register.module.css'
import{FaUserEdit} from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import{RiLockPasswordLine} from 'react-icons/ri'
import{MdMarkEmailRead} from 'react-icons/md'
export default function Register(){
  const navigate = useNavigate();
    return(
        <>
        <h1>Register</h1>
        <button onClick={()=>navigate("/")}>Welcome to home!</button>
        <div className={styles.Login}>
      <MdMarkEmailRead/> <input type ="text" placeholder="Enter your email">
        
        </input><br></br><br></br><br></br>
      <FaUserEdit/>  <input type ="text" placeholder="Enter your username">
        
        </input><br></br><br></br><br></br>
      <RiLockPasswordLine/>  <input  type="text" placeholder="Enter your password"></input><br></br>
        <button>Register</button><br></br>
        </div>
        
        </>
    )
}