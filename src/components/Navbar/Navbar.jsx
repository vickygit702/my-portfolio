import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h3>portfolio</h3>
          <ul>
            <li>
              <a className="menu-item" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="menu-item" href="#skills">
                Skills
              </a>
            </li>
            <li>
              <a className="menu-item" href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a className="menu-item" href="#contact">
                Contact
              </a>
            </li>
            <a className="contact-btn" href="/resume.pdf" download="Resume.pdf">
              Resume
            </a>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <IoMenu
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </IoMenu>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
