import React from 'react';
import { CategoryCardProps } from '../types';
import styles from './CategoryCard.module.css';

export const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  description,
  iconUrl,
  backgroundColor
}) => (
  <div className={styles.card} style={{ backgroundColor }}>
    <h3 className={styles.title}>{title}</h3>
    <img loading="lazy" src={iconUrl} alt="" className={styles.icon} />
    <p className={styles.description}>{description}</p>
  </div>
);