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
            return {
                ...prevState,
                todos: [
                    ...prevState.todos,
                    {
                        ...payload,
                        id: prevState.lastId + 1,
                        isFinished: false
                    },
                ],
                lastId: prevState.lastId + 1,
            }
        },
        removeTodo: (prevState, { payload }) => {
            return {
                ...prevState,
                todos: prevState.todos.filter((todo) => todo.id !== payload),
            };
        },
        toggleTodo: (prevState, { payload }) => {
            return {
                ...prevState,
                todos: prevState.todos.map((todo) => {
                    if (todo.id === payload) {
                        return {
                            ...todo,
                            isFinished: !todo.isFinished,
                        };
                    }
                    return todo;
                }),
            };
        }
    }
});

export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;
export default todosSlice.reducer;