import React from "react";
import { PostContent } from "../lib/posts";
import PostItem from "./PostItem";
import TagLink from "./TagLink";
import Pagination from "./Pagination";
import { TagContent } from "../lib/tags";
import ArticleCard from "./ArticleCard";
import styles from './BlogPage.module.css';
import Header from "./Header";
import Heroheader from "./Heroheader";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  showPagination: boolean;
  pagination: {
    current: number;
    pages: number;
  };
  //optional props
  heroTitle?: string;
  heroDescription?: string;
};
export default function PostList({ posts, tags, pagination, showPagination, heroTitle, heroDescription }: Props) {
  return (
    <section className={styles.articles}>
      <header className={styles.header}>
        <Header />
        {/* <hr className={styles.divider} /> */}
      </header>
      <Heroheader tags={tags} heroTitle={heroTitle} heroDescription={heroDescription} />
      <div className={styles.articleGrid2}>
          {posts.map((post, index) => (
            <ArticleCard key={index} post={post}/>
          ))}
        </div>
        {showPagination && <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? "/posts" : "/posts/page/[page]"),
            as: (page) => (page === 1 ? null : "/posts/page/" + page),
          }}
        />}
        </section>
  );
}
