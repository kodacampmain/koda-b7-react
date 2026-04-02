import { useNavigate } from "react-router";
import { useState } from "react";

function Auth() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  // const [email, setEmail] = useState("");
  // const [pwd, setPwd] = useState("");
  const [form, setForm] = useState({
    email: "",
    pwd: "",
  });
  const submitHandler = (e) => {
    e.preventDefault();
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
    if (isValid) {
      navigate("/");
    }
  };
  const changeHandler = (e) => {
    setForm((form) => {
      return { ...form, [e.target.name]: e.target.value };
    });
  };
  return (
    <main className="h-screen bg-amber-300 flex items-center justify-center">
      <section className="w-4/6 bg-black/70 h-5/6 rounded p-2">
        <form className="bg-white h-full rounded p-2 flex flex-col gap-2" onSubmit={submitHandler}>
          <div className="flex-1 flex justify-between items-center">
            <label htmlFor="email" className="font-bold text-xl">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              className="p-1 border border-solid border-black"
              value={form.email}
              onChange={changeHandler}
            />
          </div>
          <div className="flex-1 flex justify-between items-center">
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
    </main>
  );
}

export default Auth;
