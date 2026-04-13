import { useState } from "react";
import { useDispatch } from "react-redux";

import { addTodo } from "../redux/slices/todos.js";

function TodosForm() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    title: "",
    desc: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(form));
    setForm({
      title: "",
      desc: "",
    });
  };
  const onChangeHandler = (e) => {
    setForm((prevForm) => {
      return {
        ...prevForm,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <section className="border-l-black border-l border-solid p-2">
      <form className="flex flex-col" onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="title">Judul</label>
          <input
            type="text"
            name="title"
            id="title"
            className="borderstd-black p-1 rounded-md font-sans w-full"
            value={form.title}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="desc">Deskripsi</label>
          <textarea
            name="desc"
            id="desc"
            className="borderstd-black p-1 rounded-md w-full resize-none"
            value={form.desc}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <button className="btn p-1 rounded-md self-end" type="submit">
          Create
        </button>
      </form>
    </section>
  );
}

export default TodosForm;
