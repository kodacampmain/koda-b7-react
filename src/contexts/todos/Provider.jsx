import { useReducer } from "react";
import TodosContext from "./context.js";

const initialState = {
  todos: [],
  lastId: 0,
};
function TodosProvider({ children }) {
  const [state, dispatch] = useReducer((prevState, { type, payload }) => {
    switch (type) {
      case "ADD_TODO":
        return {
          ...prevState,
          todos: [
            ...prevState.todos,
            {
              ...payload,
              id: prevState.lastId + 1,
            },
          ],
          lastId: prevState.lastId + 1,
        };
      case "REMOVE_TODO":
        return {
          ...prevState,
          todos: prevState.todos.filter((todo) => todo.id !== payload),
        };
      case "TOGGLE_TODO":
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

      default:
        return prevState;
    }
  }, initialState);
  return (
    <TodosContext.Provider
      value={{
        todosState: state,
        todoDispatch: dispatch,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export default TodosProvider;
