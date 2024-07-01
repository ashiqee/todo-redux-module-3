import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit';

interface TTodo {
    id: number;
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
    initialState: {
        todos: [],
    },
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({...action.payload, isCompleted: false})
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})


export default todoSlice.reducer;