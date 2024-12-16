import React from "react";
import styles from "../pages/BlogPage.module.css";
import { CategoryLink } from "../components/CategoryLink";

const Heroheader = ({ tags, heroTitle, heroDescription, subtitle = null }) => {
  return (
    <div style={{borderBottom: "0.5px solid #757575"}}>
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
        <div
          className={styles.introHero}
        >
          {!heroTitle && (
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/95ce2caa2c5ab1c8b628c389da352801bdb37f1b6cba802c323b0973321a1b31?placeholderIfAbsent=true&apiKey=71249f2c33024956925bb4f9887c89d7"
              alt="Nanditha C P"
              className={styles.profileImage}
            />
          )}
          <h2 className={styles.greeting}>
            {heroTitle || (
              <>
                Hello Again, <br />
                I'm Nanditha C P 👋🏻
              </>
            )}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </h2>
        </div>
        <div className={styles.introText}>
          <p className={styles.description}>
            {heroDescription ? (
              heroDescription
            ) : !heroTitle && !heroDescription ? (
              <>
                I'm a UI/UX Designer, Front-end Developer, and a Blogger. I love
                creating beautiful and functional digital experiences. I'm
                passionate about design systems, user experience, and web
                development. I write about design, development, and
                productivity.
              </>
            ) : null}
          </p>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Heroheader;
