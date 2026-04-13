import { useSelector } from "react-redux";

import TodosCard from "./TodosCard";

// const todos = [];
function TodosView() {
  const todoState = useSelector((state) => state.todos);
  return (
    <section className="p-2 grid grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-[100px]">
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
