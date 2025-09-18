/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import Hero from '../components/Hero';

function Server(props) {
  return (
    <div className={styles.icon__wrapper}>
      <a href="/projects">
        <img
          src={props.src}
          alt={props.name}
          title={props.name}
          className={styles.icon}
        />
        {props.partner && <Partner />}
      </a>
    </div>
  );
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="ML engineer specializing in deploying and scaling AI models for production environments. Passionate about MLOps, cloud infrastructure, and optimizing model performance.">
      <Hero />
      <section className={styles.servers_wrapper}>
        <h2>Projects</h2>
        <div className={styles.servers}>
          <Server name="Fin-RWKV" src="img/projects_logo/finrwkv.png" />
          <Server name="Helicone" src="img/projects_logo/helicone.webp" />
          <Server name="MarkAI" src="img/projects_logo/markai.png" />
          <Server
            name="Mirage Vision Renderer"
            src="img/projects_logo/mirage-vision-renderer.png"
          />
          <Server
            name="Flatiron Open Source"
            src="img/projects_logo/flatironopensource.webp"
          />
          <Server
            name="Markhope"
            src="img/projects_logo/markhope_logo-green.svg"
          />
          <Server
            name="MindGarden"
            src="img/projects_logo/mindgarden-logo-blue.svg"
          />
          <Server
            name="MyPassManager"
            src="img/projects_logo/mypassmanager-logo192.png"
          />
          <Server name="BoardiBoard" src="img/projects_logo/boardiboard.svg" />
        </div>
      </section>
      <section id="about" className={styles.features}>
        <div className="container">
          <div className={styles.about}>
              <div>
                <img
                  className={styles.aboutProfilePic}
                  src={useBaseUrl('img/profile.webp')}
                  alt="Umut Hope YILDIRIM Logo"
                />
              </div>
              <div className={styles.aboutText}>
                <h2>Hello there,</h2>
                <p>
                  🇹🇷 My name is Umut YILDIRIM, and I am a Full Stack Software
                  Engineer based in Turkey.
                </p>
                <p>
                  🚀 My passion is building cool stuff with technology,{' '}
                  regardless of whether it is{' '}
                  <Link to={useBaseUrl('projects/')}>
                    websites, apps, or the Internet of Things.
                  </Link>
                </p>
                <p>
                  🌏 There is no doubt that coding is the closest thing we have
                  on this planet to magic, at least to me.
                </p>
                <p>
                  👨‍💻 Since 2016, I have been using my Raspberry Pi as a tool to
                  help me write beautiful code.
                </p>
                <p>
                  🏆 When I was in high school, my friends and I participated in
                  ten hackathons, and we won seven of them.
                </p>
                <p>
                  🎒 During my time at{' '}
                  <a href="https://www.isikun.edu.tr/international">
                    Isik University
                  </a>{' '}
                  from 2020 to 2022, I was a student of the Computer Programming
                  Associate Degree program.
                </p>
                <p>
                  🎒 The{' '}
                  <a href="https://flatironschool.com/">Flatiron School</a>{' '}
                  recently awarded me a certificate in Computer Science as part
                  of its Computer Science program.
                </p>
                <p>
                  🥇 I&apos;m currently working as a Machine Learning Engineer
                  at <a href="https://medal.tv">Medal.TV</a>&apos;s{' '}
                  <a href="https://highlight.ing">Highlight</a> project.
                </p>
              </div>
          </div>
        </div>
      </section>
      <section className={styles.features}></section>
    </Layout>
  );
}
