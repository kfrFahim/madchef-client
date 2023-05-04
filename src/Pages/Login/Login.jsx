import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

const Login = () => {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const navigate = useNavigate();
  const { signIn } = useContext(AuthContext);

  const [error, setError] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        form.reset();
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    if (password.length < 6) {
      setError("Your Password must be 6 characters");
    } else if (email === "") {
      setError("Enter Your Email");
    } else if (password === "") {
      setError("Enter Your password");
    }
  };

  const handleGoogleSignIn = () => {
    console.log("tip lagse");
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        error;
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(form);
      })
      .catch((error) => {
        error;
      });
  };

  return (
    <div className="md:w-[500px] h-[550px] my-[50px] mx-auto border-2 shadow shadow-blue-500/40 hover:shadow-indigo-500/40">
      <h1 className="text-4xl text-center font-semibold text-orange-300">
        Login
      </h1>
      <form className="ml-[40px] my-4" onSubmit={handleLogin}>
        <p className="ml-[40px] my-3 text-red-500">{error}</p>

        <div>
          <label className="block" htmlFor="email">
            Email
          </label>
          <input
            className="md:w-[400px] h-[55px] border-2 border-black text-xl pl-4 rounded"
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
            className="md:w-[400px] h-[55px] border-2 border-black text-xl pl-4 rounded"
            type="password"
            name="password"
            id=""
            required
          />
        </div>
        <input
          type="submit"
          className="btn bg-gradient-to-r from-yellow-400 to-orange-300 md:w-[400px] h-[55px] text-black font-semibold border-0"
          value="Login"
        />
        <Link
          className="btn bg-gradient-to-r from-yellow-400 to-orange-300 md:w-[400px] h-[55px] text-black font-semibold border-0 mt-4"
          to="/register"
        >
          <button>Register Here</button>
        </Link>
      </form>

      <h1 className="my-4 text-2xl font-bold text-center ">Login With</h1>
      <div className="flex justify-center gap-3 ">
        <button
          onClick={handleGoogleSignIn}
          className="btn normal-case btn-info mb-2"
        >
          {" "}
          <FaGoogle />
          Login with Google
        </button>
        <button onClick={handleGithubSignIn} className="btn normal-case">
          {" "}
          <FaGithub></FaGithub>Login with Github
        </button>
      </div>

      <p className="ml-[40px]">
        <small className="text-sm">
          New to MadChef Kekappa ?{" "}
          <Link className="text-blue-500 text-sm" to="/register">
            Register Here
          </Link>{" "}
        </small>
      </p>
    </div>
  );
};

export default Login;
