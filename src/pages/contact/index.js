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
 import {ContactForm} from './contactModule';

 
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
             <Link
               className={clsx(
                 'button button--outline button--secondary button--lg',
                 styles.getStarted,
               )}
               to={useBaseUrl('docs/')}>
               Get Started
             </Link>
           </div>
         </div>
       </header>
       <ContactForm/>
     </Layout>
   );
 }
 