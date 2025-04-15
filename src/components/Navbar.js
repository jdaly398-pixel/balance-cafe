import React, { useState } from "react";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { Link } from "react-router-dom";
import Logo from "../assets/balanaceLogo.png";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  // Function to toggle navbar
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  // Function to handle link clicks
  const handleLinkClick = () => {
    setOpenLinks(false); // Reset navbar to show logo
  };

  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="Logo" />
        <div className="hiddenLinks">
          <Link to={"/"} onClick={handleLinkClick}>Home</Link>
          <Link to={"/menu"} onClick={handleLinkClick}>Menu</Link>
          <Link to={"/about"} onClick={handleLinkClick}>About</Link>
          <Link to={"/contact"} onClick={handleLinkClick}>Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to={"/"} onClick={handleLinkClick}>Home</Link>
        <Link to={"/menu"} onClick={handleLinkClick}>Menu</Link>
        <Link to={"/about"} onClick={handleLinkClick}>About</Link>
        <Link to={"/contact"} onClick={handleLinkClick}>Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;