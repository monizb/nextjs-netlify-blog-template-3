import React from 'react';
import { ArticleCardProps } from '../types';
import styles from './ArticleCard.module.css';

export const ArticleCard: React.FC<ArticleCardProps> = ({
  category,
  title,
  description,
  imageUrl,
  iconUrl
}) => (
  <article className={styles.card}>
    {imageUrl && <img loading="lazy" src={imageUrl} alt="" className={styles.image} />}
    <div className={styles.content}>
      <div className={styles.category}>
        {iconUrl && (
          <div className={styles.iconWrapper}>
            <img loading="lazy" src={iconUrl} alt="" className={styles.icon} />
          </div>
        )}
        <span className={styles.categoryText}>{category}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  </article>
);