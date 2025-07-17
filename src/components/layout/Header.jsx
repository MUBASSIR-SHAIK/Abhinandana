import React, { useEffect, useRef, useState } from "react";
import "./Header.scss";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import leftIcon from "../../assets/images/svg/app-left-logo.svg";
import rightIcon from "../../assets/images/svg/app-right-logo.svg";
 
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const menuRef = useRef(null);

  const toggleButtonRef = useRef(null);
 
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Ventures", href: "#ventures" },
    { label: "Services", href: "#contact" },
    { label: "Developments", href: "#blog" },
    { label: "Awards", href: "#awards" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id], div[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);
  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="top-header">
        <div className="top-left-header">
          <span className="call-head border-right">
            {" "}
            <IoCallSharp color="#757575" size={24} />
            <h6> 123-456-7890</h6>
          </span>
          <span className="call-head">
            <MdEmail color="#757575" size={24} />
            <h6>Info@lorem.com</h6>
          </span>
        </div>
        <div className="top-social-menu">
          <div className="search-box">
            <FiSearch className="search-icon" size={24} />
            <input type="text" placeholder="Search" />
          </div>
          <FaFacebookF color="#708037" size={24} />
          <FaInstagram color="#708037" size={24} />
          <FaLinkedin color="#708037" size={24} />
          <FaYoutube color="#708037" size={24} />
        </div>
      </div>

      <nav className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
        <div className="navbar-header">
          <div className="navbar-toggle">
            <img src={rightIcon} alt="logo" />
            <button
              ref={toggleButtonRef}
              onClick={toggleMenu}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <HiMenuAlt3 size={25} color="#000" />
            </button>
          </div>
        </div>
        <div ref={menuRef} className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <img src={leftIcon} alt="Left Logo" />
          <ul className="nav navbar-nav">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={
                    activeSection === item.href.replace("#", "") ? "active" : ""
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <img src={rightIcon} alt="Right Logo" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
