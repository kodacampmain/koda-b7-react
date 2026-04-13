import { useDispatch } from "react-redux";

import { removeTodo, toggleTodo } from "../redux/slices/todos";
/**
 * @typedef {Object} todo
 * @property {number} todo.id
 * @property {string} todo.title
 * @property {string} todo.desc
 * @property {boolean} todo.isFinished
 */
/**
 * Single Todo
 * @param {Object} props
 * @param {todo} props.todo
 * @returns {JSX.Element}
 */
function TodosCard({ todo }) {
  const dispatch = useDispatch();
  const onRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };
  return (
    <article className={`${todo.isFinished ? "bg-green-300" : "bg-red-300"} p-2 rounded-md`}>
      <header className="font-bold text-lg capitalize flex">
        <h2 className="line-clamp-1">{todo.title}</h2>
        <div className="ml-auto flex">
          <img
            className="cursor-pointer"
            src={todo.isFinished ? "/cross.svg" : "/check.svg"}
            alt={todo.isFinished ? "cross" : "check"}
            height={20}
            width={20}
            onClick={() => onToggleTodo(todo.id)}
          />
          <img
            className="cursor-pointer"
            src="/trash-can.svg"
            alt="trash-can"
            height={20}
            width={20}
            onClick={() => onRemoveTodo(todo.id)}
          />
        </div>
      </header>
      <p className="text-sm line-clamp-3">{todo.desc}</p>
    </article>
  );
}

export default TodosCard;
