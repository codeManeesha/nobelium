import React from 'react'
import {useDispatch} from "react-redux"
import {deleteTask} from "../redux/taskSlice"

export default function TodoItem({id,title}) {
    const dispatch =useDispatch();

    const removeTask =()=>{
        dispatch(
            deleteTask({
                id:id
            })
        )
        alert('task is deleted')
    }
  return (
    <li>
    <div>
      {title}
    </div>
    <div>
<button onClick={()=>{
    removeTask()
}}>delete</button>
    </div>
    </li>
  )
}
