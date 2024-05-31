import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget';

const NavBar = () => {
  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/" style={styles.link}>TOUILLE</Link>
      </div>
      <ul style={styles.navLinks}>
        <li style={styles.navLink}>
          <Link to="/" style={styles.link}>INICIO</Link>
        </li>
        <li style={styles.navLink}>
          <Link to="/categoria/picada" style={styles.link}>PICADA</Link>
        </li>
        <li style={styles.navLink}>
          <Link to="/categoria/picada2" style={styles.link}>PICADA2</Link>
        </li>
        <li style={styles.navLink}>
          <Link to="/categoria/picada3" style={styles.link}>PICADA3</Link>
        </li>
        <li style={styles.navLink}>
          <CartWidget />
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.5rem 1rem',
    backgroundColor: '#333',
    color: '#fff'
  },
  logo: {
    fontSize: '1.5rem'
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem'
  },
  navLink: {
    fontSize: '1.2rem'
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  }
};

export default NavBar;
