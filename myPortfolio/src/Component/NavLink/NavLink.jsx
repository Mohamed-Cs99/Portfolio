// components/NavLink.js
import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import styles from '../Navbar/Navbar.module.css';

const NavLink = ({ to, label, onClick }) => {
  return (
    <li className={styles.navItem}>
      <Link
        to={to}
        smooth={true}
        duration={500}
        className={styles.navLinks}
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;