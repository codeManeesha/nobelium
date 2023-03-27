import styles from './Register.module.css'
export default function Register(){
    return(
        <>
        <h1>Register</h1>
        <div className={styles.Login}>
        <input type ="text" placeholder="Enter your email">
        
        </input><br></br><br></br><br></br>
        <input type ="text" placeholder="Enter your username">
        
        </input><br></br><br></br><br></br>
        <input  type="text" placeholder="Enter your password"></input><br></br>
        <button>Register</button><br></br>
        </div>
        
        </>
    )
}