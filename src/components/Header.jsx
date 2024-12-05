import React from 'react';
import styles from '../pages/BlogPage.module.css';

const Header = () => {
    return (
        <div className={styles.brand}>
          <h1 className={styles.brandTitle}>Nanditha C P</h1>
          <div className={styles.brandSubtitle}>Thought Cloud</div>
        </div>
    );
};

export default Header;