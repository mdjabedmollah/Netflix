import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isLogin, setLogin] = useState(false);
  const loginHandler = () => {
    setLogin(!isLogin);
  };
  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getInputData=(e)=>{
   e.preventDefault()
   console.log(fullName,email,password)
   setEmail('')
   setPassword('')
   setFullname('')
   }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-[100vw] h-[100vh] bg-center"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f562aaf4-5dbb-4603-a32b-6ef6c2230136/dh0w8qv-9d8ee6b2-b41a-4681-ab9b-8a227560dc75.jpg/v1/fill/w_1192,h_670,q_70,strp/the_netflix_login_background__canada__2024___by_logofeveryt_dh0w8qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6Ii9mL2Y1NjJhYWY0LTVkYmItNDYwMy1hMzJiLTZlZjZjMjIzMDEzNi9kaDB3OHF2LTlkOGVlNmIyLWI0MWEtNDY4MS1hYjliLThhMjI3NTYwZGM3NS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.FScrpAAFnKqBVKwe2syeiOww6mfH6avq-DRHZ_uFVNw"
          alt="netflix-bg img"
        />
      </div>

      <form
        onSubmit={getInputData}
        className="bg-black absolute text-white flex flex-col text-lg left-0 right-0 mx-auto my-36 p-5 w-4/12 items-center justify-center opacity-90 rounded-md "
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isLogin ? "Login" : "Signup"}
        </h1>
        <div className="flex flex-col ">
          {!isLogin && (
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Full Name"
              className="outline-none p-3 my-2 rounded-b-md bg-gray-700 text-white text-lg"
            />
          )}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="outline-none p-3 my-2 rounded-b-md bg-gray-700 text-white text-lg"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" password"
            className="outline-none p-3 my-2 rounded-b-md  bg-gray-700 text-white text-lg"
          />
          <button className="bg-red-500 mt-6 p-3 rounded-md  ">
            {isLogin ? "Signup" : "Login"}
          </button>
          <p className="mt-2">
            {isLogin ? "New to Netflix?" : "Already have an account?"}{" "}
            <span
              onClick={loginHandler}
              className="ml-1 text-blue-500 font-medium cursor-pointer"
            >
              {isLogin ? "Signup" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
