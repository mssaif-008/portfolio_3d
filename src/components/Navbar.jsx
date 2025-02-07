import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants";
import { myLogo, menu, close } from "../assets";
import "./Navbar.css"; 

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo" onClick={() => { setActive(""); window.scrollTo(0, 0); }}>
          <img src={myLogo} alt="logo" className="logo-image" />
          <p className="logo-text">Saif <span className="desktop-only"> | Portfolio</span></p>
        </Link>
        
        <ul className="nav-links desktop-only">
          {navLinks.map((nav) => (
            <li key={nav.id} className={`nav-item ${active === nav.title ? "active" : ""}`} onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="menu-icon mobile-only" onClick={() => setToggle(!toggle)}>
          <img src={toggle ? close : menu} alt="menu" className="menu-image" />
        </div>

        {toggle && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              {navLinks.map((nav) => (
                <li key={nav.id} className={`mobile-nav-item ${active === nav.title ? "active" : ""}`} onClick={() => { setToggle(false); setActive(nav.title); }}>
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
