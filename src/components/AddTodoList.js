import React, { useState } from 'react'
import {useDispatch} from'react-redux'
import {addTask} from '../redux/taskSlice'

export default function AddTodo() {
    const [value,setValue]=useState('')
    
    const dispatch =useDispatch()

    function onSubmit(e){
      e.preventDefault()
    

    dispatch(
        addTask({
            task:value
        })
      
    )
    setValue('')
    
      }
  return (
    <div>
      <input
      type="text"
      placeholder="Add Task"
      value={value}
      onChange={(e)=>setValue(e.target.value)}
      />
      <button type='submit' onClick={onSubmit}>Add</button>
    
    </div>
  )
}
