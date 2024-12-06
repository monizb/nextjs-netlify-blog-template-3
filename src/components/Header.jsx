import React from 'react';
import styles from '../pages/BlogPage.module.css';
import Link from 'next/link';

const Header = () => {
    return (
      <Link href="/">
        <div className={styles.brand}>
          <h1 className={styles.brandTitle}>Nanditha C P</h1>
          <div className={styles.brandSubtitle}>Thought Cloud</div>
        </div>
      </Link>
    );
};

export default Header;