import React from "react";
import styles from "../pages/BlogPage.module.css";
import { CategoryLink } from "../components/CategoryLink";


const Heroheader = ({ tags, heroTitle, heroDescription }) => {
  return (
    <section className={styles.intro}>
      <div className={styles.navigation}>
        <div className={styles.tagline}>
          Anything and Everything{" "}
          <em className={styles.taglineEmphasis}>Design</em>
        </div>
        <ul className={styles.categories2}>
          {tags.map((tag, index) => (
            <li key={index}>
              <CategoryLink key={index} {...tag} />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.introContent}>
        <div style={{ display: "flex", alignItems: "center", flex: 1, width: "100%" }}>
          {!heroTitle && <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/95ce2caa2c5ab1c8b628c389da352801bdb37f1b6cba802c323b0973321a1b31?placeholderIfAbsent=true&apiKey=71249f2c33024956925bb4f9887c89d7"
            alt="Nanditha C P"
            className={styles.profileImage}
          />}
          <h2 className={styles.greeting}>
  {heroTitle || (
    <>
      Hello Again, <br />
      I'm Nanditha C P 👋🏻
    </>
  )}
</h2>
        </div>
        <div className={styles.introText}>
          <p className={styles.description}>
            A human centered visual communication and interaction designer, with
            a knack for exploration through innovations and conversations. I am
            a speculative thinker and endeavor to tie the future, the
            contemporary and the history together to generate intriguing and
            valuable ideas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Heroheader;
