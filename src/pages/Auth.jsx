import { useNavigate } from "react-router";
import { useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";

function Auth() {
  const navigate = useNavigate();
  const [, setUsername] = useLocalStorage("user", "");
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  // const [email, setEmail] = useState("");
  // const [pwd, setPwd] = useState("");
  const [form, setForm] = useState({
    email: "",
    pwd: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  // const emailRef = useRef();
  // const pwdRef = useRef();
  // useEffect(() => {
  //   console.log(emailRef.current.value);
  //   console.log(pwdRef.current.value);
  // });
  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(emailRef.current.value);
    // console.log(pwdRef.current.value);
    const validCreds = {
      email: "koda@mail.com",
      password: "12345",
    };
    // validate first
    let isValid = true;
    if (validCreds.email !== form.email) {
      isValid = false;
    }
    if (validCreds.password !== form.pwd) {
      isValid = false;
    }
    if (!isValid) {
      setErrorMsg("email/password is wrong");
      setShowToast(true);
      return;
    }
    // localStorage.setItem("user", form.email);
    setUsername(form.email);
    navigate("/");
  };
  const changeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };
  return (
    <main className="h-screen bg-amber-300 flex items-center justify-center">
      <section className="w-4/6 bg-black/70 h-5/6 rounded p-2">
        <form
          className="bg-white h-full rounded p-2 flex flex-col gap-2 inside-input:text-blue-600 inside-input:hover:borderstd-primary"
          onSubmit={submitHandler}
          noValidate
        >
          <div className="flex-1 grid grid-cols-2 justify-between items-center">
            <label htmlFor="email" className="font-bold text-xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="p-1 border border-solid border-black"
              value={form.email}
              onChange={changeHandler}
              // onKeyUp={(e) => {
              //   if (e.key === "/") {
              //     pwdRef.current.focus();
              //     return
              //   }
              // }}
              // ref={emailRef}
            />
          </div>
          <div className="flex-1 grid grid-cols-2 justify-between items-center">
            <label htmlFor="pwd" className="font-bold text-xl">
              Password
            </label>
            <input
              type={show ? "text" : "password"}
              name="pwd"
              id="pwd"
              className="p-1 border border-solid border-black"
              value={form.pwd}
              onChange={changeHandler}
              // ref={pwdRef}
            />
          </div>
          <p
            className={`${form.pwd.length == 0 || form.pwd.length >= 5 ? "invisible" : ""} text-red-400 text-sm text-right`}
          >
            Panjang password tidak boleh kurang dari 5 karakter
          </p>
          <div className="flex-1 flex gap-1 items-center select-none">
            <input
              type="checkbox"
              id="show"
              className="cursor-pointer"
              onChange={() => {
                setShow((show) => !show);
              }}
            />
            <label htmlFor="show" className="cursor-pointer">
              Show Password
            </label>
          </div>
          <button type="submit" className="flex-1 border border-solid border-black cursor-pointer select-none">
            Login
          </button>
        </form>
      </section>
      <Toast
        message={errorMsg}
        isError={!!errorMsg}
        isShow={showToast}
        onClose={() => {
          setShowToast(false);
        }}
      />
    </main>
  );
}

function Toast({ message, isShow, isError, onClose }) {
  setTimeout(() => {
    onClose();
  }, 1000);
  return (
    <div
      className={`${isShow ? "block" : "hidden"} fixed bottom-2.5 right-2.5 ${isError ? "bg-red-500" : "bg-green-600"} rounded-sm`}
      onClick={onClose}
    >
      <p className="p-2">{message}</p>
      <div className="animate-toast h-2 bg-black"></div>
    </div>
  );
}

function Modal({ onCloseModal }) {
  return (
    <div className="outside" onClick={onCloseModal}>
      <div className="inside"></div>
    </div>
  );
}

export default Auth;
