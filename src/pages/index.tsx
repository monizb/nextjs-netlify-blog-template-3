import React from 'react';
import { CategoryLink } from '../components/CategoryLink';
import { CategoryCard } from '../components/CategoryCard';
import { ArticleCard } from '../components/ArticleCard';
import { categoryCards, articles } from '../data';
import styles from './BlogPage.module.css';
import BasicMeta from '../components/meta/BasicMeta';
import { TagContent, listTags } from "../lib/tags";
import { GetStaticProps } from "next";

type Props = {
  tags: TagContent[];
};

export default function Index({ tags }: Props) {
  return (
      <div className={styles.blogContainer}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <h1 className={styles.brandTitle}>Nanditha C P</h1>
          <div className={styles.brandSubtitle}>Thought Cloud</div>
          <BasicMeta url={"/"} />
        </div>
        <hr className={styles.divider} />
        <div className={styles.navigation}>
          <div className={styles.tagline}>
            Anything and Everything <em className={styles.taglineEmphasis}>Design</em>
          </div>
          <ul className={styles.categories}>
            {tags.map((tag, index) => (
              <li key={index}>
              <CategoryLink key={index} {...tag} />
              </li>
            ))}
          </ul>
        </div>
      </header>

      <section className={styles.intro}>
        <div className={styles.introContent}>
          <img 
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/95ce2caa2c5ab1c8b628c389da352801bdb37f1b6cba802c323b0973321a1b31?placeholderIfAbsent=true&apiKey=71249f2c33024956925bb4f9887c89d7" 
            alt="Nanditha C P" 
            className={styles.profileImage} 
          />
          <div className={styles.introText}>
            <h2 className={styles.greeting}>
              Hello Again, <br />
              I'm Nanditha C P 👋🏻
            </h2>
            <p className={styles.description}>
              A human centered visual communication and interaction designer,
              with a knack for exploration through innovations and
              conversations. I am a speculative thinker and endeavor to tie
              the future, the contemporary and the history together to
              generate intriguing and valuable ideas.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.categories}>
        <div className={styles.categoryGrid}>
          {categoryCards.map((card, index) => (
            <CategoryCard key={index} {...card} />
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

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