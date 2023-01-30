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


export default function About() {
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
          <section className={styles.features}>
            <div className="container">
              <div className={styles.about}>
                <div>
                  <img
                    className={styles.aboutProfilePic}
                    src={useBaseUrl("img/profile.webp")}
                    alt="Umut Hope YILDIRIM Logo"
                  />
                </div>
                <div class={styles.aboutText}>
                  <h2>Hello there,</h2>
                  <p>
                    🇹🇷 My name is Umut YILDIRIM, and I am a Full Stack Software Engineer based in Turkey.
                  </p>
                  <p>
                    🚀 My passion is building cool stuff with technology, {" "}
                    regardless of whether it is {" "}
                    <Link to={useBaseUrl("projects/")}>
                      websites, apps, or the Internet of Things.
                    </Link>
                  </p>
                  <p>
                    🌏 There is no doubt that coding is the closest thing we have on this planet to magic, at least to me.
                  </p>
                  <p>
                    👨‍💻 Since 2016, I have been using my Raspberry Pi as a tool to help me write beautiful code.
                  </p>
                  <p>
                    🏆 When I was in high school, my friends and I participated in ten hackathons, and we won seven of them.
                  </p>
                  <p>
                    🎒 During my time at {" "}
                    <a href="https://www.isikun.edu.tr/international">
                      Isik University 
                    </a>{" "}
                    from 2020 to 2022, I was a student of the Computer Programming Associate Degree program.
                  </p>
                  <p>
                    🎒 The <a href="https://flatironschool.com/">Flatiron School</a> recently awarded me a certificate in Computer Science as part of its Computer Science program.
                  </p>
                  <p>
                    ☁️ I am passionate about cloud-native technologies and open source software.{" "}<br />
                    🔥 I am a huge fan of Google Cloud Platform and Firebase.<br />
                    At the moment, I am working on a Firebase and Cloudflare project that I am very excited about.
                  </p>
                </div>
              </div>
            </div>
          </section>
      </main>
    </Layout>
  );
}