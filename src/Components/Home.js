 import { useRecoilState } from "recoil"
import  taskListAtom from "./TaskListAtom"
import { useState } from "react"
import {Link} from 'react-router-dom'
import ChangeColor from './ChangeColor'
 export default function HomePage(){
    const [taskList,setTaskList] =useRecoilState(taskListAtom)
    const [newTask,setNewTask] = useState('')

    const handleAddTask =()=>{
    
        setTaskList([...taskList,newTask])
        setNewTask('')
    }
    return(
<div>
    <input type="text" value ={newTask} onChange={(e) =>setNewTask(e.target.value)}/>
    <button onClick={handleAddTask}>Add Task</button>
    <Link to ="/task"><button>Check tasks</button></Link><br></br>
    <ChangeColor/>
</div>
    )
 }