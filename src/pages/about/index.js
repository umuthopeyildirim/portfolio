/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Easy to Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`About Me`}
      description="Get to know me! ">
      <header className={clsx('hero hero--primary', styles.heroBanner, 'heroBannerAboutMe')}>
        <div className="container">
          <h1 className="hero__title">About Me</h1>
          <p className="hero__subtitle">Get to know me!</p>
          <div className={styles.buttons}>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className={styles.about}>
                <div>
                  <img
                    className={styles.aboutProfilePic}
                    src={useBaseUrl("img/hope.webp")}
                    alt="Umut Hope YILDIRIM Logo"
                  />
                </div>
                <div class={styles.aboutText}>
                  <h2>Hi</h2>
                  <p>
                    🇹🇷 I am Umut YILDIRIM, a Full Stack Software Engineer based in Turkey.
                  </p>
                  <p>
                    🚀 I love building cool and meaningful things with tech like {" "}
                    <Link to={useBaseUrl("projects/")}>
                      websites, applications or games
                    </Link>
                    .
                  </p>
                  <p>
                    🌏 To me, coding is the closest thing to magic we have on Earth.
                  </p>
                  <p>
                    👨‍💻 I have been writing beautiful code with my Raspberry Pi{" "}
                    since 2016.
                  </p>
                  <p>
                    🏆  We attended 10 hackathons and won 7 of them with my high school friends.
                  </p>
                  <p>
                    🎒 I was a{" "} Computer Programing Associate Degree Student
                    at the{" "}
                    <a href="https://www.isikun.edu.tr/international">
                      Isik University 
                    </a>{" "}
                    from 2020 to 2022.
                  </p>
                  <p>
                    🎒 I recently graduated from{" "} 
                    <a href="https://flatironschool.com/">Flatiron School</a>{" "}  with Computer Science certificate.
                  </p>
                  <p>
                    ☁️ I'm open source and cloud-native enthusiast.{" "}<br />
                    🔥 Love Firebase and Google Cloud Platform.<br />
                    Currently learning and studying Azure.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}