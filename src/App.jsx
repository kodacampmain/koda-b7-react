import { useState } from "react";

import Kelas from "./Kelas.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [counter, setCounter] = useState(0);
  const incCounter = () => {
    setCounter((counter) => counter + 1);
    // setCounter((counter) => {
    //   return counter + 1;
    // });
  };
  const decCounter = () => {
    setCounter((counter) => counter - 1);
  };
  return (
    <main>
      <section>
        <Header name={"Koda"} />
        <p>Komponen Fungsi</p>
        <button className="border-2 border-black border-solid p-2 bg-gray-100 cursor-pointer" onClick={incCounter}>
          Counter: {counter}
        </button>
        <button className="border-2 border-black border-solid p-2 bg-gray-100 cursor-pointer mx-2" onClick={decCounter}>
          Decrease Counter
        </button>
      </section>
      <Kelas />
    </main>
  );
}

export default App;
