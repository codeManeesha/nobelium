import Styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { FaHouseUser } from "react-icons/fa"
export default function Home (){
    return(
        <>
        <div className={Styles.body}>
       <div className={Styles.Home}>
       <h3> <FaHouseUser/></h3>
        <h3><Link to ='/'>Home</Link></h3>
        <h3><Link to="./about">About us</Link></h3>
        <h3><Link to ='./login'>Log in</Link></h3>
       
       </div>
       <div className={Styles.image}>
       <img src='./images/bg.jpg'/>
       </div>
      <div className={Styles.welcome}>
       <h1>welcome</h1>
       <p>We sell lifestyle</p>
      </div>
       </div>
       
        </>
    )
}