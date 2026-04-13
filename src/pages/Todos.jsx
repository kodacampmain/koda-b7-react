import { useState } from "react";
import TodosForm from "../components/TodosForm";
import TodosView from "../components/TodosView";

function Todos() {
  const [counter, setCounter] = useState(0);
  const onClickCounter = () => {
    setCounter((counter) => counter + 1);
    setCounter((counter) => counter + 1);
  };
  return (
    <>
      <header className="bg-primary text-white p-2 flex">
        <h1 className="text-xl">Todos</h1>
        <p className="ml-auto" onClick={onClickCounter}>
          {counter}
        </p>
      </header>
      <main className="grid grid-cols-[3fr_1fr] grid-rows-1 min-h-[calc(100vh-44px)]">
        <TodosView />
        <TodosForm />
      </main>
    </>
  );
}

export default Todos;
