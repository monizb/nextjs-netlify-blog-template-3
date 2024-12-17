import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import ArticleCard from '../components/ArticleCard';
import { categoryCards, articles } from '../data';
import styles from './BlogPage.module.css';
import BasicMeta from '../components/meta/BasicMeta';
import { TagContent, listTags } from "../lib/tags";
import { GetStaticProps } from "next";
import Header from '../components/Header';
import Heroheader from '../components/Heroheader';
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import config from "../lib/config";
import PostList from '../components/PostList';
import Link from 'next/link';
import Footer from '../components/Footer';

type Props = {
  tags: TagContent[];
  posts: PostContent[];
  pagination: {
    current: number;
    pages: number;
  };
};

export default function Index({ tags, posts, pagination }: Props) {

  //restrict posts to first 6 only
  posts = posts.slice(0, 6);
  return (
      <div className={styles.blogContainer}>
      <header className={styles.header}>
        <Header />
        {/* <hr className={styles.divider} /> */}
      </header>

      <Heroheader tags={tags} heroDescription={null} heroTitle={null} />

      <div className={styles.blogContent}>
      <section className={styles.categories}>
      <div className={styles.categoryGrid}>
  {categoryCards.map((card, index) => {
    const cardClass =
      index === 3
        ? styles['card--desktop-wide'] // 2nd card on desktop
        : index === 2
        ? styles['card--mobile-wide'] // 3rd card on mobile
        : undefined;

    return <CategoryCard key={index} {...card} className={cardClass} />;
  })}
</div>
      </section>
      </div>

      {/* <hr className={styles.divider} /> */}

      <section className={styles.articles}>
        <h2 className={styles.sectionTitle} id="most-recent">Most Recent Articles</h2>
        {/* <div className={styles.articleGrid}>
        <PostList posts={posts} tags={tags} pagination={pagination} showPagination={false} />
        </div> */}
        <div className={styles.articleGrid}>
          {posts.map((post, index) => (
            <ArticleCard key={index} post={post}/>
          ))}
        </div>
        <Link href="/posts">
        <button className={styles.viewMore}>View more articles</button>
        </Link>
      </section>
      <Footer fullWidth />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};