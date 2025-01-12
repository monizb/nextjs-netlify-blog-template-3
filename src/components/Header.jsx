import React, { useState } from 'react';
import styles from '../pages/BlogPage.module.css';
import Link from 'next/link';
import { CategoryLink } from './CategoryLink';

const Header = ({tags}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.brand}>
          <h1 className={styles.brandTitle}>Nanditha C P</h1>
          <div className={styles.brandSubtitle}>Thought Cloud</div>
        </div>
      </Link>
      <div className={styles.navContainer}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          {isMenuOpen ? '×' : '☰'} {/* Hamburger or X icon */}
        </button>
        <div className={`${styles.dropdownMenu} ${isMenuOpen ? styles.open : ''}`}>
          <ul style={{alignItems: 'center', textAlign: 'center'}}>
            {tags.map((tag, index) => (
            <li key={index}>
              <CategoryLink key={index} {...tag} mobile />
              <br />
            </li>
          ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
