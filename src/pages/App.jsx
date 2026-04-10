import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

import Kelas from "../components/Kelas.jsx";
import Header from "../components/Header.jsx";
// import Nav from "../components/Nav.jsx";
import useLocalStorage from "../hooks/useLocalStorage.js";

function App() {
  const navigate = useNavigate();
  const [username, , removeUsername] = useLocalStorage("user", "");
  // const [isLoggedin, setIsLoggedIn] = useLocalStorage("login-status", false);
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);
  const incCounter = () => {
    setCounter((counter) => counter + 1);
    // setCounter(10)
    // setCounter((counter) => {
    //   return counter + 1;
    // });
  };
  const decCounter = () => {
    setCounter((counter) => counter - 1);
  };
  // dimana useEffect akan trigger untuk setiap lifecycle update
  // useEffect(() => {
  //   console.log("effect all");
  //   // unmounting
  //   return () => {
  //     console.log("effect unmounting");
  //   };
  // });
  // useEffect yang hanya trigger 1 kali (did mount)
  useEffect(() => {
    console.log("effect mount");
    (async function () {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) throw new Error(`${response.status}; ${response.statusText}`);
        const data = await response.json();
        setUsers(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // useEffect yang trigger setiap ada update
  useEffect(() => {
    console.log("effect counter update");
  }, [counter]);
  // const [username, setUsername] = useState(() => {
  //   return localStorage.getItem("user");
  // });
  useEffect(() => {
    if (!username) {
      navigate("/auth", { replace: true });
      return;
    }
  }, [username, navigate]);
  return (
    <main>
      {/* <Nav /> */}
      <section>
        <Header name={username} />
        <p>Komponen Fungsi</p>
        <button className="border-2 border-black border-solid p-2 bg-gray-100 cursor-pointer" onClick={incCounter}>
          Counter: {counter}
        </button>
        <button className="border-2 border-black border-solid p-2 bg-gray-100 cursor-pointer mx-2" onClick={decCounter}>
          Decrease Counter
        </button>
      </section>
      <Kelas />
      <section>
        <Header name={"Users"} />
        <ol>
          {users.length ? (
            users.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })
          ) : (
            <p>Loading...</p>
          )}
        </ol>
      </section>
      <button
        className="fixed bottom-2.5 right-2.5 rounded-full bg-amber-500 p-2 cursor-pointer"
        onClick={() => {
          // setUsername("");
          // localStorage.removeItem("user");
          removeUsername();
        }}
      >
        Logout
      </button>
    </main>
  );
}

export default App;
