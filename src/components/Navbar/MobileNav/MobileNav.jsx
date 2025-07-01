// import React from "react";
// import "./MobileNav.css";
// const MobileNav = ({ isOpen, toggleMenu }) => {
//   return (
//     <>
//       <div
//         className={`mobile-menu ${isOpen ? "active" : ""}`}
//         onClick={toggleMenu}
//       >
//         <div className="mobile-menu-container">
//           <h4>Time To Program</h4>
//           <ul>
//             <li>
//               <a className="menu-item" href="#home">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a className="menu-item" href="#skills">
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a className="menu-item" href="#projects">
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a className="menu-item" href="#contact">
//                 Contact
//               </a>
//             </li>

//             <a className="contact-btn" href="/resume.pdf" download="Resume.pdf">
//               Resume
//             </a>
//           </ul>
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileNav;
import React from "react";
import "./MobileNav.css";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
      {/* Overlay that closes menu when clicked */}
      <div className="mobile-menu-overlay" onClick={toggleMenu} />

      <div
        className="mobile-menu-container"
        onClick={(e) => e.stopPropagation()}
      >
        <h4>portfolio</h4>
        <ul>
          <li>
            <a className="menu-item" href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="menu-item" href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a className="menu-item" href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a className="menu-item" href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
          <li>
            <a
              className="contact-btn"
              href="/resume.pdf"
              download="Resume.pdf"
              onClick={toggleMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
