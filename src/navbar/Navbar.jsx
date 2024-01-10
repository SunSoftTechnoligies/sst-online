import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    const scrolled = currentScrollY > 0;
    setScrolled(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: isScrolled ? 'rgba(211, 211, 211, 0.7)' : 'black',
    transition: 'background-color 0.5s ease',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,
  };

  return (
    <nav style={navbarStyle} className="p-4">
      <div className="w-full flex items-center justify-between">
        {/* Company Logo */}
        <div className="flex items-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5D09120OZdxF8ithOFLEz9dtayESVVWsg69noZtuLsg&s"
            alt="Company Logo"
            className="w-10 h-10 mr-2 rounded-full"
          />
          <span className="text-white text-lg font-bold">Sun-Soft Technologies</span>
        </div>

        {/* Responsive Menu Button - Visible on small screens */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-full right-0 bg-black text-white text-md font-bold mt-2 p-6 text-lg flex flex-col">
              <Link to="/" onClick={() => { scrollToTop(); closeMenu(); }}>
                Home
              </Link>
              <span style={{ cursor: 'pointer' }} onClick={() => { scrollToServices(); closeMenu(); }}>
                Services
              </span>
              {/* <Link to="/record" onClick={closeMenu}>
                Record
              </Link> */}
              <Link to="/about" onClick={closeMenu}>
                About Us
              </Link>
              <Link to="/contact" onClick={closeMenu}>
                Contact
              </Link>
            </div>
          )}
        </div>

        {/* Regular Menu - Visible on larger screens */}
        <ul className={`hidden lg:flex text-white text-md font-bold space-x-8`}>
          <li>
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
          </li>
          <li style={{ cursor: 'pointer' }} onClick={() => { scrollToServices(); closeMenu(); }}>
            <span>Services</span>
          </li>
          {/* <li>
            <Link to="/record" onClick={closeMenu}>
              Record
            </Link>
          </li> */}
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
