import React, { useEffect, useState } from "react";
import Navbar from "../Pages/Header/Navbar";
import Footer from "../Pages/Footer/Footer";
import { Outlet } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Main = () => {
  const [loading, setLoading] = useState(false);

  const override = {
     display: "block",
     margin: "200px auto",
   };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  return (
    <div>
      {loading ? (
        <ClipLoader
          loading={loading}
          cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <Navbar></Navbar>
          <Outlet></Outlet>
          <Footer></Footer>
        </>
      )}
    </div>
  );
};

export default Main;
