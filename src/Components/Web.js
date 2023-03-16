import React, { useState } from "react";
import LeftDiv from './page1'
import RightDiv from './Page2';
import TextAreaWithLimit from "./Text";
import SignInForm from "./SignIn";

export default function Main(){

    const [image, setImage] = useState("https://picsum.photos/200"); // initial image URL

 const changeImage =()=>{
   setImage(`https://picsum.photos/200?random=${Math.random()}`); // generate new random image URL
  };
  

  return (
    <>
       <div className="container">
      <LeftDiv image={image} />
      <div className="right">
        <RightDiv
          onClick={changeImage}
          text="Change Pic"
        />
      </div>
    </div>
       <TextAreaWithLimit/>
      <SignInForm/>
      
    </>
  )
  }


