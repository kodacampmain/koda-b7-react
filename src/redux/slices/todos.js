import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    lastId: 0,
};
const todosSlice = createSlice({
    initialState,
    name: "todos",
    reducers: {
        addTodo: (prevState, { payload }) => {
            // old (without immer)
            // return {
            //     ...prevState,
            //     todos: [
            //         ...prevState.todos,
            //         {
            //             ...payload,
            //             id: prevState.lastId + 1,
            //             isFinished: false
            //         },
            //     ],
            //     lastId: prevState.lastId + 1,
            // }
            // new (with immer)
            const newTodo = {
                ...payload,
                id: prevState.lastId + 1,
                isFinished: false
            }
            prevState.todos.push(newTodo)
            // prevState.lastId = prevState.lastId + 1
            prevState.lastId++
        },
        removeTodo: (prevState, { payload }) => {
            // old (without immer)
            // return {
            //     ...prevState,
            //     todos: prevState.todos.filter((todo) => todo.id !== payload),
            // };
            // new (with immer)
            const newTodos = prevState.todos.filter((todo) => todo.id !== payload)
            prevState.todos = newTodos
        },
        toggleTodo: (prevState, { payload }) => {
            // old (without immer)
            // return {
            //     ...prevState,
            //     todos: prevState.todos.map((todo) => {
            //         if (todo.id === payload) {
            //             return {
            //                 ...todo,
            //                 isFinished: !todo.isFinished,
            //             };
            //         }
            //         return todo;
            //     }),
            // };
            // new (with immer)
            const idx = prevState.todos.findIndex(todo => todo.id === payload)
            prevState.todos[idx].isFinished = !prevState.todos[idx].isFinished
        }
    }
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;