import {useRecoilValue} from 'recoil'
import  taskListAtom from './TaskListAtom'
 
export default function TaskPage(){
    const taskList =useRecoilValue(taskListAtom)
    return(
        <div>
            <h1>Task to do!</h1>
            <ul>
                {taskList.map((task,index)=>(
                    <li key ={index}>{task}</li>
                ))}
            </ul>

        </div>
    )
}