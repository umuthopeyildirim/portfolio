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
 import {ContactForm} from './contact';

 
 export default function Home() {
   const context = useDocusaurusContext();
   const {siteConfig = {}} = context;
   return (
     <Layout
       title={`Contact Me`}
       description="Description will go into a meta tag in <head />">
       <header className={clsx('hero hero--primary', styles.heroBanner, 'heroBannerContact')}>
         <div className="container">
           <h1 className="hero__title">Contact Me</h1>
           <p className="hero__subtitle">{siteConfig.tagline}</p>
           <div className={styles.buttons}>
           </div>
         </div>
       </header>
       <ContactForm/>
     </Layout>
   );
 }
 