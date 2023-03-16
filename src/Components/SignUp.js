import React from 'react';
import './Form.css'

const SignUpForm = () => {
  return (
    <>
    <div className='Sign1'>
    <form>
    <label >First Name</label>
    <input type="text"/>
    <label>Last Name</label>
    <input type="text"/>
    <label>Email</label>
    <input type="text"></input>
    <label>password</label>
    <input type ="text"></input>
    </form>
    </div>
    </>
  );
};

export default SignUpForm;
