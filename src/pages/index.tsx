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

      <div style={{borderBottom: "0.5px solid #757575"}}>
      <section className={styles.categories}>
        <div className={styles.categoryGrid}>
          {categoryCards.map((card, index) => (
            <CategoryCard key={index} {...card} />
          ))}
        </div>
      </section>
      </div>

      {/* <hr className={styles.divider} /> */}

      <section className={styles.articles}>
        <h2 className={styles.sectionTitle}>Most Recent Articles</h2>
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

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <div className={styles.brandTitle}>Nanditha C P</div>
            <div className={styles.brandSubtitle}>Thought Cloud</div>
          </div>
          <div className={styles.footerLinks}>
            <span className={styles.copyright}>Copyright 2024 by Nanditha C P</span>
            <div className={styles.portfolioLink}>
              <span>Portfolio</span>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eced50317727911886e0d098f63d6cf87e52aea1db0cbd3f98c5c59fa956123?placeholderIfAbsent=true&apiKey=71249f2c33024956925bb4f9887c89d7" alt="" className={styles.linkIcon} />
            </div>
          </div>
        </div>
      </footer>
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