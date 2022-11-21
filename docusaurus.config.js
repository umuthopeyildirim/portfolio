/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
require('dotenv').config()


const config = {
  title: 'Umut Hope YILDIRIM',
  tagline: 'My Portfolio Website',
  url: 'https://portfolio-umut-yildirim.web.app',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'umuthopeyildirim', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.
  
  customFields: {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID,
    cloudMessagingVapidKey: process.env.FIREBASE_CLOUDMESSAGINGVAPIDKEY,
    reCaptchaV3SiteKey: process.env.RECAPTCHA_V3_SITEKEY
  },
  plugins: [
    [
      'docusaurus-plugin-content-gists',
      {
        enabled: true,
        verbose: false,
        personalAccessToken: process.env.GH_PERSONAL_ACCESS_TOKEN,
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-RTD554CXLK',
        anonymizeIP: false,
      },
    ],
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/umuthopeyildirim/portfolio/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/umuthopeyildirim/portfolio/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      }),
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
        ignorePatterns: ['/tags/**'],
        filename: 'sitemap.xml',
      },
    ],
  ],
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themes: ['docusaurus-theme-search-typesense'],
  themeConfig:
  ({
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    typesense: {
      typesenseCollectionName: 'hope-portfolio_1669069064', // Replace with your own doc site's name. Should match the collection name in the scraper settings.
      
      typesenseServerConfig: {
        nodes: [
          {
            host: 'a8vrziso260fc95hp-1.a1.typesense.net',
            port: 443,
            protocol: 'https',
          },
        ],
        apiKey: process.env.TYPESENSE_READ_ONLY_API_KEY,
      },
      typesenseSearchParameters: {},
      contextualSearch: true,
    },
    metadata: [
      {
        name: 'keywords', 
        content: 'Umut YILDIRIM, Umut Hope YILDIRIM, Umut, Hope, Yildirim, Portfolio, Blog, Gists, Tutorials, Projects, About'
      },
      {
        name: 'description',
        content: 'Umut YILDIRIM\'s Portfolio Website'
      },
      {
        name: 'docsearch:language_tag',
        content: 'en'
      },
    ],
    navbar: {
      logo: {
        alt: 'Umut YILDIRIM Logo',
        src: `/img/logo-light.png`,
        srcDark: `/img/logo-dark.png`,
        href: '/',
        target: '_self',
      },
      items: [
        {
          to: 'about', 
          label: 'About Me', 
          position: 'left' 
        },
        {
          to: 'projects',
          label: 'Projects',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorials',
        },
        {
          to: 'blog', 
          label: 'Blogs', 
          position: 'left'
        },
        {
          to: 'gists', 
          label: 'Gists', 
          position: 'left' 
        },
        {
          to: 'contact', 
          label: 'Contact', 
          position: 'left' 
        },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/umuthopeyildirim/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        {
          href: 'https://garden.umutyildirim.com/',
          position: 'right',
          className: 'header-obsidian-link',
          'aria-label': 'Digital Garden Link',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Support me',
          items: [
            {
              html: '<a target="_blank" href="https://www.buymeacoffee.com/hope"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=hope&button_colour=215fc5&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00" /></a>',
            },
            {
              html: '<a href="https://twitter.com/hopesweaty?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-dnt="true" data-show-count="false">Follow @HopeSweaty</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
            },
          ],
        },
        {
          title: 'Discover',
          items: [
            {
              label: 'Projects',
              to: 'projects',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'Tutorials',
              to: 'docs/intro',
            },
            {
              label: 'Gists',
              to: 'gists',
            },
          ],
        },
        {
          title: 'Get To Know Me',
          items: [
            {
              label: 'About Me',
              to: 'about',
            },
            {
              label: 'Contact Me',
              to: 'contact',
            },
            {
              label: 'My Resume',
              href: 'https://umutyildirim.com/download/resume.pdf',
            },
            {
              label: 'My CV',
              href: 'https://umutyildirim.com/download/cv.pdf',
            },
          ],
        },
        {
          title: 'Social Media',
          items: [
            {
              label: 'Digital Garden',
              href: 'https://garden.umutyildirim.com/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/umuthopeyildirim',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/umuthopeyildirim/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/umuthopeyildirim/',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Umut Hope YILDIRIM. Built with <a href="https://docusaurus.io" target="_blank">Docusaurus🦖</a>`,
    },
  }),
};

module.exports = config;
