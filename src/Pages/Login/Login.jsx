import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {

     const nevigate = useNavigate()
     const {signIn} = useContext(AuthContext);
     
     const [error , setError] = useState("")

     const handleLogin = (event) => {
       event.preventDefault();
   
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;


       signIn(email, password)
       .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser)
          form.reset();
          nevigate("/")
       })
       .catch(error => {
          console.log(error);
          setError(error.message);
        })
   
      if(password.length < 6){
        setError("Your Password must be 6 characters")
     }
   
     };
   

     return (
          <div className='w-[500px] h-[500px] my-[50px] mx-auto border-2 shadow shadow-blue-500/40 hover:shadow-indigo-500/40'>
               <h1 className='text-4xl text-center font-semibold text-orange-300'>Login</h1>
               <form className='ml-[40px] my-8' onSubmit={handleLogin}>
                    <div>
                         <label className='block' htmlFor="email">Email</label>
                         <input className='w-[400px] h-[55px] border-2 border-black text-xl pl-4 rounded' type="email" name="email" id="" required />
                    </div>
                    <div className='my-5'>
                         <label className='block' htmlFor="password">Password</label>
                         <input className='w-[400px] h-[55px] border-2 border-black text-xl pl-4 rounded' type="password" name="password" id="" required />
                    </div>
                    <input type='submit' className="btn bg-gradient-to-r from-yellow-400 to-orange-300 w-[400px] h-[55px] text-black font-semibold border-0" value="Login" />
               </form>

          
            <h1 className='my-4 text-2xl font-bold text-center '>Login With</h1>
            <div className='flex justify-center gap-3 '>
            <button className='btn normal-case btn-info mb-2' > <FaGoogle />Login with Google</button>
            <button className='btn normal-case' > <FaGithub></FaGithub>Login with Github</button>
            </div>

               <p className='ml-[40px]'><small className='text-sm' >New to MadChef Kekappa ? <Link className='text-blue-500 text-sm' to="/register">Register Here</Link> </small></p>

               <p className="ml-[40px] my-3 text-red-500">{error}</p>
          </div>
     );
};

export default Login;