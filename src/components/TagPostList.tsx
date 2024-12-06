import React from "react";
import { PostContent } from "../lib/posts";
import { TagContent } from "../lib/tags";
import PostItem from "./PostItem";
import Pagination from "./Pagination";
import styles from './BlogPage.module.css';
import Header from "./Header";
import Heroheader from "./Heroheader";
import ArticleCard from "./ArticleCard";

type Props = {
  posts: PostContent[];
  tag: TagContent;
  tags: TagContent[];
  showPagination: boolean;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function TagPostList({ posts, tag, pagination, showPagination, tags }: Props) {
  return (
    <section className={styles.articles}>
      <header className={styles.header}>
        <Header />
        {/* <hr className={styles.divider} /> */}
      </header>
      <Heroheader tags={tags} heroTitle={tag.name} heroDescription={tag.description} />
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
