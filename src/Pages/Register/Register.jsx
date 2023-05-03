import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {

     const [error , setError] = useState("");
     const {createUser}= useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    setError('');
    if(password !== confirm){
     setError("Your Password Didn't match")
     return
  }

  createUser(email, password)
  .then(result => {
     const loggedUser = result.user;
     console.log(loggedUser)
     nevigate("/login")
     form.reset();
  })
  .catch(error => {
    console.log(error);
    setError(error.message);
  })


  };

  

  return (
    <div>
      <div className="w-[500px] h-[500px] my-[50px] mx-auto border-2 shadow shadow-blue-500/40 hover:shadow-indigo-500/40">
        <h1 className="text-4xl text-center font-semibold text-orange-300">
          Register
        </h1>
        <form className="ml-[40px] my-8" onSubmit={handleRegister}>
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="w-[400px] h-[35px] border-2 border-black text-xl pl-4 rounded"
              type="text"
              name="name"
              id=""
            />
          </div>
          <div>
            <label className="block my-2" htmlFor="photourl">
              Photo Url
            </label>
            <input
              className="w-[400px] h-[35px] border-2 border-black text-xl pl-4 rounded"
              type="text"
              name="photourl"
              id=""
            />
          </div>
          <div>
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="w-[400px] h-[35px] border-2 border-black text-xl pl-4 rounded"
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="my-5">
            <label className="block" htmlFor="password">
              Password
            </label>
            <input
              className="w-[400px] h-[35px] border-2 border-black text-xl pl-4 rounded"
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="my-5">
            <label className="block" htmlFor="confiem">
              Confirm Password
            </label>
            <input
              className="w-[400px] h-[35px] border-2 border-black text-xl pl-4 rounded"
              type="password"
              name="confirm"
              id=""
              required
            />
          </div>
          <input
            type="submit"
            className="btn bg-gradient-to-r from-yellow-400 to-orange-300 w-[400px] h-[35px] text-black font-semibold border-0"
            value="Register"
          />
        </form>
        <p className="ml-[40px]">
          <small className="text-sm">
            Already Have an Account ?{" "}
            <Link className="text-blue-500 text-sm" to="/login">
              Login Here
            </Link>{" "}
          </small>
        </p>

        <p className="ml-[40px] my-3 text-red-500">{error}</p>
      </div>
    </div>
  );
};

export default Register;
