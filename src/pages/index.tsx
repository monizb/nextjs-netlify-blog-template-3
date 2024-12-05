import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { ArticleCard } from '../components/ArticleCard';
import { categoryCards, articles } from '../data';
import styles from './BlogPage.module.css';
import BasicMeta from '../components/meta/BasicMeta';
import { TagContent, listTags } from "../lib/tags";
import { GetStaticProps } from "next";
import Header from '../components/Header';
import Heroheader from '../components/Heroheader';

type Props = {
  tags: TagContent[];
};

export default function Index({ tags }: Props) {
  return (
      <div className={styles.blogContainer}>
      <header className={styles.header}>
        <Header />
        {/* <hr className={styles.divider} /> */}
      </header>

      <Heroheader tags={tags} />

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
        <div className={styles.articleGrid}>
          {articles.map((article, index) => (
            <ArticleCard key={index} {...article} />
          ))}
        </div>
        <button className={styles.viewMore}>View more articles</button>
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
  const tags = listTags();
  return {
    props: {
      tags,
    },
  };
};