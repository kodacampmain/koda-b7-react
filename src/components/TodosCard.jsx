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
  return (
    <article className={`${todo.isFinished ? "bg-green-300" : "bg-red-300"}`}>
      <header>{todo.title}</header>
      <p>{todo.desc}</p>
    </article>
  );
}

export default TodosCard;
