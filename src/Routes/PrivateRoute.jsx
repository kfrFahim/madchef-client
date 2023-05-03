import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";

const PrivateRoute = ({children}) => {
     const {user , loading} = useContext(AuthContext);
     const location = useLocation();
     console.log(location);

     const override = {
          display: "block",
          margin: "125px auto",
        };

     if(loading){
          return    <ClipLoader
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
     }

     if(user){
          return children;
     }
     
     return (
  <Navigate state={{from : location}} to="/login"></Navigate>
     );
};

export default PrivateRoute;