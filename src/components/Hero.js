import React from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
  return (
    <header className={styles.hero}>
      <div className="container">
        <div className="center-please row">
          <div className="col col--6">
            <h1>
              A Docusaurus-powered<br />
              <span className="highlight">portfolio for everyone</span>
            </h1>
            <Link
              className={clsx(
                "button button--primary button--lg",
                styles.getStartedButton
              )}
              to="/docs/intro"
            >
              Get Started
            </Link>
            <Link
              className="button button--secondary button--lg"
              to="https://github.com/umuthopeyildirim"
            >
              <img
                className={styles.githubIcon}
                src={useBaseUrl("/img/github.svg")}
                alt="GitHub Logo"
              />{" "}
              <span className={styles.githubButtonText}>GitHub</span>
            </Link>
            <p className="padding-top--md">
              I like full-stack development. Also, I am interested in the cloud, computer vision and artificial intelligence.
            </p>
          </div>
          <div className="col col--6">
            <img
              className={styles.logo}
              src={useBaseUrl("/img/hope.png")}
              alt="Umut Hope YILDIRIM Logo"
            />
          </div>
        </div>
      </div>
    </header>
  );
}