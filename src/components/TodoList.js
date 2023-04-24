import React from 'react'
import TodoItem from './TodoItems'
import Complete from './CompleteTask'
import {useSelector} from 'react-redux'

export default function TodoList() {
    const todos =useSelector((state)=>{
        return state.task;
    })
  return (
    
        <ul>
      {todos.map((todo)=>{
        return(
          <>
        <TodoItem id={todo.id} title={todo.name} completed ={todo.status}/>
        <Complete id={todo.id} title ={todo.name} completed ={todo.status}/>
        </>
        )
      }
      )}
      </ul>
    
  )
}
