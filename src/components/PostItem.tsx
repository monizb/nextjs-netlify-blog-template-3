import { PostContent } from "../lib/posts";
import Date from "./Date";
import Link from "next/link";
import { parseISO } from "date-fns";
import { getTag } from "../lib/tags";
import styles from './ArticleCard.module.css';

type Props = {
  post: PostContent;
};
export default function PostItem({ post }: Props) {
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
      <p className={styles.description}>{post.startingText}</p>
    </div>
  </article>
    </Link>
  );
}
