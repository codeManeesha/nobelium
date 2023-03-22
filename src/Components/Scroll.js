import React from "react";
import './Scroll.css';
//import img from './images/img1.jpg'
const Scroll=()=> {
    return(
        <>
        <h2 style={{display:"flex" ,justifyContent:"center",color:"purple"}}>Our mentors</h2>
<div className="main">
    <h1 style={{color:"orange"}}>scroll to know<br></br> our mentors</h1>
    <div className="image1">
    
    <div class="pokemon">
        <div class="img-container">
            <img src="./images/img1.jpg" alt="${name}"/>
        </div>
        <div class="info">
            <span class="number">1</span>
            <h3 class="name">Aniket</h3>
            <small class="type"><span>know more</span> </small>
        </div>
    </div>
    </div>
    
    <div className="image2">
    <div class="pokemon">
        <div class="img-container">
            <img src="./images/img2.jpg" alt="${name}"/>
        </div>
        <div class="info">
            <span class="number">2</span>
            <h3 class="name">Ankita</h3>
            <small class="type"> <span>Know more</span> </small>
        </div>
    </div>
    </div>
    <div className="image3">
    <div class="pokemon">
        <div class="img-container">
            <img src="./images/img3.jpg" alt="${name}"/>
        </div>
        <div class="info">
            <span class="number">3</span>
            <h3 class="name">Amit</h3>
            <small class="type"><span>Know more</span> </small>
        </div>
    </div>
    </div>
   </div>
   </>
    )
    
}
  
export default Scroll