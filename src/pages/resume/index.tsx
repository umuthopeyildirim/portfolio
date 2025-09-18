/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import clsx from 'clsx';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

export default function Resume() {
  return (
    <Layout title={`Resume`} description="This is my resume for everyone!">
      <header
        className={clsx(
          'hero hero--primary',
          styles.heroBanner,
          'heroBannerAboutMe',
        )}>
        <div className="container">
          <h1 className="hero__title">Resume</h1>
          <p className="hero__subtitle">This is my resume for everyone!</p>
          <div className={styles.buttons}></div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className={styles.about}>
              <iframe
                src="https://umutyildirim.com/download/resume.pdf"
                className={styles.pdf}></iframe>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
