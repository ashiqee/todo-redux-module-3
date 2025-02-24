import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface TTodo {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
}
interface TodoState {
    todos: TTodo[]
}

const initialState: TodoState  ={
todos:[],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({...action.payload, isCompleted: false})
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        toggleComplete : (state,action)=>{
            const task = state.todos.find(item=> item.id === action.payload);
           
            
            task!.isCompleted = !task?.isCompleted
            state.todos = state.todos.sort((x,y)=> x.isCompleted === y.isCompleted  ? 0:x.isCompleted ? 1:-1)
        },
        updateTodo: (state,action)=>{
           const {id,newValues}=action.payload
            const task = state.todos.find(item=> item.id === id);
            
            if(task){
                Object.assign(task,newValues);
                // state.todos = state.todos.sort((x,y)=> x.isCompleted === y.isCompleted  ? 0:x.isCompleted ? 1:-1)
            }
           
            
        },
    },
})

export const {addTodo,removeTodo,toggleComplete,updateTodo}= todoSlice.actions
export default todoSlice.reducer;