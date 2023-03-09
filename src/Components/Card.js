import React, { Fragment } from 'react'
import './Card.css'
import image from './Amit.jpg'
import image1 from './Ruhi.jpg'
function Card(props) {
  return (
    <Fragment>
    <div className='container'>
      
        <div className='image-container'>
        <img src={image} alt='' height="100px" width="100px"/>
          
          </div>
      <h2>{props.heading}</h2>
      <h3>{props.name}</h3>
      <p>{props.content}</p>
    </div>
    <div className='container'>
      
      <div className='image-container'>
      <img src={image1} alt='' height="100px" width="100px"/>
        
        </div>
    <h2>{props.heading1}</h2>
    <h3>{props.name1}</h3>
    <p>{props.content1}</p>
  </div>
 </Fragment>
  )
}

export default Card


