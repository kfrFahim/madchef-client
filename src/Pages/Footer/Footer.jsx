import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mx-14 bg-[#585858] my-5 p-5">
      <div className="grid grid-cols md:grid-cols-3 mx-auto">
        <div className="mx-auto text-white">
          <h1 className="text-3xl my-3">About</h1>
          <ul className="text-sm mb-3">
            <li>
              <a href="#">PRIVACY POLICY</a>
            </li>
            <li className="my-3">
              <a href="#">DISCLOSURE</a>{" "}
            </li>
            <li>
              <a href="#">TERMS OF USE</a>
            </li>
            <li className="my-3">
              <a href="#">ACCESSIBILITY STATEMENT</a>
            </li>
          </ul>
        </div>
        <div className="mx-auto text-white">
          <h1 className="text-3xl my-3 text-center">MadChef</h1>
          <Link to="/register">
            <p className="my-8 text-center border p-2">
              SIGN UP FOR EMAILS AND UPDATES!!
            </p>
          </Link>
        </div>
        <div className="mx-auto text-white">
          <h1 className="text-3xl text-center my-3">Contact</h1>

          <div>
            <p>Email : madchefmaxican@gmail.com</p>
            <p>Phone : +52 888 462 2083</p>
          </div>

          <ul className="grid grid-cols-2 gap-5 ml-4">
            <li className="my-3 text-2xl">
              {" "}
              <FaGithub></FaGithub>{" "}
            </li>
            <li className="my-3 text-2xl">
              {" "}
              <FaLinkedin></FaLinkedin>{" "}
            </li>
            <li className="my-3 text-2xl">
              <FaGoogle></FaGoogle>
            </li>
            <li className="my-3 text-2xl">
              {" "}
              <FaTwitter></FaTwitter>{" "}
            </li>
          </ul>
        </div>
      </div>

      <h1 className="text-center my-8">
        © 2023 CHEF SERVICE ALL RIGHTS RESERVED. PROTECTED BY INTELLECTUAL
        PROPERTY LAW.
      </h1>
    </div>
  );
};

export default Footer;
