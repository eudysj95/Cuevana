/* eslint-disable no-unused-vars */
import React from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-[#FFFFFF] h-20 flex justify-center items-center">
      <Link to="/inicio" className="flex justify-center items-center">
        <img src={logo} alt="logo" />
        <h1 className="text-3xl font-bold ml-1">Cuevana</h1>
      </Link>
    </header>
  );
};
