import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../components/ThemeProvider";

const Navbar = () => {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  return (
    <div>
      <nav className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/posts">Posts</NavLink>
        <NavLink to="/about">About us</NavLink>

        <button className={`${theme}-element`} style={{ float: "right" }} onClick={handleChangeTheme}>{theme.toUpperCase()}</button>
      </nav>
    </div>
  );
};

export default Navbar;
