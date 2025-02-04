import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styles from './Navbar.module.css';
import NavLink from './../NavLink/NavLink';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  const closeMobileMenu = () => {
    setIsMobile(false);
  };

  // Add shadow to navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <Link
          to="home"
          smooth={true}
          duration={500}
          className={styles.navbarLogo}
          onClick={closeMobileMenu}
        >
          My Portfolio
        </Link>
        <div
          className={styles.menuIcon}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobile ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={isMobile ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <NavLink to="home" label="Home" onClick={closeMobileMenu} />
          <NavLink to="about" label="About" onClick={closeMobileMenu} />
          <NavLink to="projects" label="Projects" onClick={closeMobileMenu} />
          <NavLink to="contact" label="Contact" onClick={closeMobileMenu} />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
