import React from "react";
import styles from "../pages/BlogPage.module.css";
import { CategoryLink } from "../components/CategoryLink";

const Heroheader = ({ tags, heroTitle, heroDescription, subtitle = null, extraSpacing=false, iverseSpace=false }) => {
  return (
    <div style={{borderBottom: "0.5px solid #757575"}}>
      <section className={extraSpacing ? styles.introExtra: styles.intro}>
        {extraSpacing && <div className={styles.mobileTopSpacing} />}
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
      <div className={extraSpacing ? styles.introContentExtra : styles.introContent}>
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
          <h2 className={iverseSpace ? styles.greetingInverse : styles.greeting}>
  <div className={styles.heroTitleWrapper}>
    {heroTitle || (
      <>
        Hello Again, <br />
        I'm Nanditha C P 👋🏻
      </>
    )}
  </div>
  {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
  {!heroTitle  && <p className={extraSpacing ? styles.descriptionExtraI : styles.descriptionI}>
    {!heroTitle && !heroDescription ? (
      <>
        A human-centered visual communication and interaction designer, with a knack for exploration through innovations and conversations. I am a speculative thinker and endeavor to tie the future, the contemporary, and the history together to generate intriguing and valuable ideas.
      </>
    ) : null}
  </p>}
</h2>
        </div>
        {heroDescription && <div className={styles.introText}>
          <p className={extraSpacing ? styles.descriptionExtra : styles.description}>
            {heroDescription ? (
              heroDescription
            ) : null}
          </p>
        </div>}
      </div>
    </section>
    </div>
  );
};

export default Heroheader;
