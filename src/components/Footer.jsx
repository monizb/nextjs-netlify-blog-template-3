import React from 'react';
import styles from '../pages/BlogPage.module.css';
import Link from 'next/link';

const Header = ({fullWidth = false}) => {
    return (
        <footer className={styles.footer} style={{width: fullWidth === true ? "100%": null}}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.brandTitle}>Nanditha C P</div>
            <div className={styles.brandSubtitle}>Thought Cloud</div>
          </div>
          <div className={styles.vl}></div>
          <span className={styles.copyright}>Copyright 2024 by Nanditha C P</span>
          <div className={styles.vl2}></div>
            <div className={styles.portfolioLink}>
              <span>Portfolio</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eced50317727911886e0d098f63d6cf87e52aea1db0cbd3f98c5c59fa956123?placeholderIfAbsent=true&apiKey=71249f2c33024956925bb4f9887c89d7" alt="" className={styles.linkIcon} />
            </div>
            <div className={styles.copyrightmob}>
            <hr  />
            <span >Copyright 2024 by Nanditha C P</span>
            </div>
        </div>
      </footer>
    );
};

export default Header;