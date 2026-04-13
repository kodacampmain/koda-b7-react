import { useSelector } from "react-redux";

import TodosCard from "./TodosCard";

// const todos = [];
function TodosView() {
  const todoState = useSelector((state) => state.todos);
  return (
    <section className="p-2">
      {todoState.todos.length > 0 ? (
        todoState.todos.map((todo) => {
          return <TodosCard key={todo.id} todo={todo} />;
        })
      ) : (
        <p>No Todos Available</p>
      )}
    </section>
  );
}

export default TodosView;
