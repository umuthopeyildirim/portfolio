import React from 'react';
import styles from './Hero.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="center-please row">
          <div className="col col--6">
            <h1>
              Hi. I'm <span className={styles.highlight}>Umut YILDIRIM</span>
              <br />
            </h1>
            <p>
              As a junior software developer, I am passionate about turning AI
              tools and research into practical, scalable software solutions. My
              focus is on implementing AI technologies efficiently and
              effectively, ensuring they serve real-world applications. My goal
              is to make advanced AI accessible and useful in various
              industries.
            </p>
            <Link
              className={clsx(
                'button button--primary button--lg',
                styles.getStartedButton,
              )}
              to="/#about">
              About Me
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="/projects">
              <img
                className={styles.githubIcon}
                src={useBaseUrl('/img/tools-solid.svg')}
                alt="Tools Icon"
              />{' '}
              <span className={styles.githubButtonText}>Projects</span>
            </Link>
          </div>
          <div className="col col--6">
            <img
              className={styles.logo}
              src={useBaseUrl('/img/profile.webp')}
              alt="Umut Hope YILDIRIM Logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
