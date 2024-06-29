import { createSlice } from '@reduxjs/toolkit'

interface Todo {
    id: number
    text: string
}
interface TodoState {
    todos: Todo[]
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
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})


export default todoSlice.reducer;