import TodosForm from "../components/TodosForm";
import TodosView from "../components/TodosView";

function Todos() {
  return (
    <>
      <header className="bg-primary text-white p-2">
        <h1 className="text-xl">Todos</h1>
      </header>
      <main className="grid grid-cols-[3fr_1fr] grid-rows-1 min-h-[calc(100vh-44px)]">
        <TodosView />
        <TodosForm />
      </main>
    </>
  );
}

export default Todos;
