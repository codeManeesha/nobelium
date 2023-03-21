import {CiPower} from "react-icons/ci";
import { SiBmcsoftware} from "react-icons/si";
import {GiHamburgerMenu} from 'react-icons/gi';
import {ImCross} from 'react-icons/im';
import { useState } from "react";
import './Nav.css';


export default function Navbar(){
    const [ show , setShow] = useState(false)
    const handleOption = ()=>{
      setShow(!show)
    }
    return(
        <>
        <div className="Nav">
        
        
        <h3><CiPower/> OnClick |</h3>
        <div id={show ? "open" : ""} className="Home">
            <h4>Home</h4>
            <h4>services</h4>
            <h4>contacts</h4>
            <h4>About Us</h4>
            
    
            <h4>Login</h4>
            <button className="button"> Sign up</button>
            
            </div>

        <div id="mobile" className="Mob">
        {show ?
          
          <h1 id ="h1" onClick={handleOption}><ImCross/></h1>:
      <h1 id="h2"onClick={handleOption}><GiHamburgerMenu/></h1>
      
         }
                   
            </div>
        
            </div>
        
        
        
        <div className="title">
            <h1 style={{color:"orange"}}>|Totally Free</h1>
            <h1>Let's bring your<br></br> team together<br></br> in OnClick</h1>
            <p>we help you to manage all of your work<br></br>and daily task in office</p>
            <button id="button">Get Started</button> 
            <p style={{color:"orange"}}><SiBmcsoftware/>How to use</p>

        </div>
        <div className="Main">
            <img src="https://img.freepik.com/free-photo/waistup-portrait-cute-beautiful-asian-woman-orange-hoodie-introduce-produce-banner-pointing-blank-white-space-holding-product-smiling-recommend-advertisement-white-background_176420-51222.jpg?w=740&t=st=1679326940~exp=1679327540~hmac=b8792bcdf65d5ebea5dc5eb4ced87758b5d572f1c5aaf0c95c046d22acb0707f"/>
        </div>
        </>
    )
}