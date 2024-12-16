import React from 'react';
import { CategoryCardProps } from '../types';
import styles from './CategoryCard.module.css';
import Router from 'next/router';

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  iconUrl,
  backgroundColor,
  href
}) => (
  <div className={styles.card} style={{ backgroundColor }} onClick={() => href.startsWith('/') ? Router.push(href) : document.getElementById('most-recent')?.scrollIntoView({ behavior: "smooth", block: "start"})}>
    <h3 className={styles.title}>{title}</h3>
    <img loading="lazy" src={iconUrl} alt="" className={styles.icon} />
    <p className={styles.description}>{description}</p>
  </div>
);