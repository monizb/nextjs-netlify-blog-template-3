import React from 'react';
import { CategoryLinkProps } from '../types';
import styles from './CategoryLink.module.css';
import Link from "next/link";
import { useRouter } from 'next/router';

export const CategoryLink: React.FC<CategoryLinkProps> = ({ name, slug }) => {
  const router = useRouter();
  const isActive = router.asPath === `/posts/tags/${slug}`;

  return (
    <Link href={"/posts/tags/[[...slug]]"} as={`/posts/tags/${slug}`}>
      <div className={`${styles.categoryLink} ${isActive ? styles.active : ''}`}>
        <span className={`${styles.title} ${isActive ? styles.bold : ''}`}>{name}</span>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/035a10a8ee68bbaa516524af4033c41eeeb3a6efbef2093e56af6a36e3f143c9?placeholderIfAbsent=true&apiKey=71249f2c33024956925bb4f9887c89d7"
          alt=""
          className={styles.icon}
        />
      </div>
    </Link>
  );
};
