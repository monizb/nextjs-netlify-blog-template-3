import React from 'react';
import { CategoryCardProps } from '../types';
import styles from './CategoryCard.module.css';
import Router from 'next/router';
import classNames from 'classnames'; // Install this via npm or yarn

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  iconUrl,
  backgroundColor,
  href,
  className
}) => (
  <div 
    className={classNames(styles.card, className)} 
    style={{ backgroundColor }} 
    onClick={() => 
      href.startsWith('/') 
        ? Router.push(href) 
        : document.getElementById('most-recent')?.scrollIntoView({ behavior: "smooth", block: "start"})
    }
  >
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
    <div className={styles.whiteBox}/>
    <h3 className={styles.title}>{title}</h3>
    </div>
    <img loading="lazy" src={iconUrl} alt="" className={styles.icon} />
    <p className={styles.description}>{description}</p>
  </div>
);
