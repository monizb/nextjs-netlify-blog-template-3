import React from 'react';
import { ArticleCardProps } from '../types';
import styles from './ArticleCard.module.css';
import { PostContent } from "../lib/posts";
import { getTag } from "../lib/tags";
import Link from "next/link";


type Props = {
  post: PostContent;
};

export default function ArticleCard({ post }: Props) {
  return (
    <Link href={"/posts/" + post.slug}>
  <article className={styles.card}>
    {post.thumbnail && <img loading="lazy" src={post.thumbnail} alt="" className={styles.image} />}
    <div className={styles.content}>
      <div className={styles.category}>
        {getTag(post.tags[0]).icon && (
          <div className={styles.iconWrapper}>
            <img loading="lazy" src={getTag(post.tags[0]).icon} alt="" className={styles.icon} />
          </div>
        )}
        <span className={styles.categoryText}>{post.subcategory}</span>
      </div>
      <h3 className={styles.title}>{post.title}</h3>
      <p className={styles.description}>{post.title}</p>
    </div>
  </article>
  </Link>
)};