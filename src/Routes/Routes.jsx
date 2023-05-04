import { createBrowserRouter } from "react-router-dom";
import Main from "../Lauout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import RecipeDetail from "../Pages/RecipeDetails/RecipeDetail";
import Error from "../Pages/Error/Error";
import PrivateRoute from "./PrivateRoute";
import React from "react";
// import Blog from "../Pages/Blog/Blog";

const LazyBlog = React.lazy(()=> import('./../Pages/Blog/Blog'))

const router = createBrowserRouter([
     {
          path:"/",
          element:<Main></Main>,
          children:[
               {
                    path:"/",
                    element:<Home></Home>,
               },
               {
                    path:"/login",
                    element:<Login></Login>
               },
               {
                    path:"/register",
                    element:<Register></Register>
               },
               {
                    path:"/recipedetails/:id",
                    element:<PrivateRoute><RecipeDetail></RecipeDetail></PrivateRoute>
               },
               {
                    path:"/blog",
                    element:<React.Suspense fallback="loading...">
                         <LazyBlog></LazyBlog>
                    </React.Suspense>
               },
               {
                    path:"*",
                    element:<Error></Error>
               }          

          ]
     },

])
export default router;