import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import authSchema from "../schemas/schema.auth.js";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: joiResolver(authSchema),
  });

  const onSubmit = (data) => console.log(data);

  useEffect(() => {
    console.log("[DEBUG] error form", errors);
  }, [errors]);

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-2 p-2 inside-input:borderstd-primary inside-input:p-2.25 inside-input:text-secondary inside-input:font-soul koda1:flex-row koda1:flex-wrap koda2:flex-col"
    >
      {/* register your input into the hook by invoking the "register" function */}
      <input type="text" {...register("username")} placeholder="username" />
      {errors.username && (
        <span className={`text-red-500 ${errors.username && "invisible"}`}>{errors.username.message}</span>
      )}

      <input type="text" {...register("password")} placeholder="password" />
      {errors.password && <span className="text-red-500">{errors.password.message}</span>}

      <input type="text" {...register("repeat_password")} placeholder="repeat password" />
      {errors.repeat_password && <span className="text-red-500">{errors.repeat_password.message}</span>}
      {/* <input
        placeholder="test"
        {...register("example", {
          minLength: {
            value: 5,
            message: "Minimal 5 karakter",
          },
          required: {
            value: true,
            message: "Harus diisi",
          },
        })}
        className="border-2 border-solid border-black p-2"
      />
      {errors.example && <span className="text-red-500">{errors.example.message}</span>} */}
      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} className="border-2 border-solid border-black p-2" /> */}
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span className="text-red-500">This field is required</span>} */}

      <button type="submit" className="p-2 btn">
        Submit
      </button>
    </form>
  );
}
