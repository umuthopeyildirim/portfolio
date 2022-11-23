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
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import Hero from "../components/Hero";

function Server(props) {
	return (
		<div className={styles.icon__wrapper}>
      <a href="/projects">
        <img src={props.src} alt={props.name} title={props.name} className={styles.icon}/>
        { props.partner && <Partner/> }
      </a>
		</div>
	)
}

export default function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Home`}
      description="I like full-stack development. Also, I am interested in the cloud, computer vision and artificial intelligence.">
      <Hero />
      <section className={styles.servers_wrapper}>
        <h2>Projects</h2>
        <div className={styles.servers}>
          <Server name="Markhope" src="img/projects_logo/markhope_logo-green.svg"/>
          <Server name="MindGarden" src="img/projects_logo/mindgarden-logo-blue.svg"/>
          <Server name="MyPassManager" src="img/projects_logo/mypassmanager-logo192.png"/>
          <Server name="BoardiBoard" src="img/projects_logo/boardiboard.svg"/>
        </div>
      </section>
      <main>
        <div className={clsx("text-center p-4",styles.heroBanner)}  id="revue-embed">
          <form action="https://newsteller.umutyildirim.com/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
            <h2>Subscribe to my newsletter</h2>
            <p>Get my latest content by email. Unsubscribe at any time.</p>
            <div>
              <div className="revue-form-group">
                <input className={styles.newsInput} placeholder="Your email address..." type="email" name="member[email]" id="member_email"></input>
              </div>
              <div className="revue-form-group">
                <input className={styles.newsInput} placeholder="First name... (Optional)" type="text" name="member[first_name]" id="member_first_name"></input>
              </div>
              <div className="revue-form-group">
                <input className={styles.newsInput} placeholder="Last name... (Optional)" type="text" name="member[last_name]" id="member_last_name"></input>
              </div>
              <div className="revue-form-actions">
                <input className={clsx("button button--primary button--lg",styles.getStartedButton)} style={{marginTop:'1rem', marginBottom:'1rem'}} type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"></input>
              </div>
            </div>
            <div className="revue-form-footer">By subscribing, you agree with Revue’s <a target="_blank" href="https://www.getrevue.co/terms">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy">Privacy Policy</a>.</div>
          </form>
        </div>
      </main>
    </Layout>
  );
}
