import {createSlice} from '@reduxjs/toolkit'

export const taskSlice =createSlice ({
    name:'tasks',
    initialState:[],
    reducers:{
        addTask:(state,action)=>{
            const newTask ={
                id: new Date(),
                name:action.payload.task,
                completed:false
            }
            state.push(newTask)
        },
        deleteTask:(state,action)=>{
           return state.filter((item)=>item.id!==action.payload.id) 
        },
        completeTask:(state,action)=>{
            const index =state.findIndex(
                (todo)=>todo.id ===action.payload.id);
                state[index].completed=action.payload.completed
            },
            counter:(state,action)=>{
                
            }

        },
        
        

    })

export const {addTask,deleteTask,completeTask} =taskSlice.actions
export default taskSlice.reducer;