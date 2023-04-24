import React from 'react'
import {useDispatch} from "react-redux"
import {completeTask} from "../redux/taskSlice"

export default function Complete({id,completed}) {
    const dispatch =useDispatch();

    const handleComplete =()=>{
        dispatch(
            completeTask({
                id:id,
                completed:!completed
            })
        )
        alert('task is completed')
    }
    
  return (

<input
  type='checkbox'
  checked={completed}
  onChange={handleComplete}
/>

  )
}