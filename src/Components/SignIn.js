import React from 'react';
import Button1 from './Button1';
import Button2 from './Button2'
import SignUpForm from './SignUp';
import './Form.css'
const SignInForm = () => {

    return (
        
        <div className='form'>
        
        <h2 className='h2'>Welcome!</h2>
        <p className='p'>Login to your account</p>
      
        <form>
          <div className='Email'>
        <label className='l1'>your Email</label><br></br>
      
     <input id="i1"type="text" ></input><br></br>
     </div>
     <div className='Pass'>
     <label className='l2'>your password</label><br></br>
     
     <input id="i2"type ="text"></input><br></br>
     </div>
     
     <Button1/><br></br>
     <h6>or</h6>
     <hr></hr>
     < Button2/><br></br>
     <SignUpForm/>
        
        </form>
      </div>
    
    );
  };
  
  export default SignInForm;