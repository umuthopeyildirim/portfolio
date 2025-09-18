/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import dotenv from 'dotenv';

dotenv.config();

const config: Config = {
  title: 'Umut Hope YILDIRIM',
  tagline: 'My Portfolio Website',
  url: 'https://umutyildirim.com/',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'umuthopeyildirim', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  future: {
    v4: true,
  },

  customFields: {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    projectId: process.env.FIREBASE_PROJECTID,
    storageBucket: process.env.FIREBASE_STORAGEBUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENTID,
    cloudMessagingVapidKey: process.env.FIREBASE_CLOUDMESSAGINGVAPIDKEY,
    reCaptchaV3SiteKey: process.env.RECAPTCHA_V3_SITEKEY,
  },
  scripts: [
    {
      async: true,
      src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6517221663935477',
      crossorigin: 'anonymous',
    },
    {
      src: 'https://cdn.ampproject.org/v0/amp-auto-ads-0.1.js',
      async: true,
      customElement: 'amp-auto-ads',
    },
  ],
  clientModules: [
    require.resolve('./src/theme/voiceflow.js'),
    require.resolve('./src/theme/posthog.js'),
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: '/img/icons/maskable_icon_x512.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: '/manifest.json', // your PWA manifest
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(37, 194, 160)',
          },
        ],
      },
    ],
    [
      '@docusaurus/plugin-google-tag-manager',
      {
        containerId: 'G-EJ20S1YRG2',
      },
    ],
    [
      'docusaurus2-dotenv',
      {
        systemvars: true,
      },
    ],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/umuthopeyildirim/portfolio/blob/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: 'all',
            title: "Hope's Blog",
            description: "Hope's Blog",
            copyright: `Copyright © ${new Date().getFullYear()} Umut YILDIRIM.`,
            language: 'en',
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/umuthopeyildirim/portfolio/blob/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {},
      } satisfies Preset.Options,
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
  themeConfig: {
    image: 'img/umutyildirim.png',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    algolia: {
      appId: 'O1HCJIY1QA',
      apiKey: 'dce316bfcba2fc8ad1620201a57b953f',
      indexName: 'umutyildirim',
      contextualSearch: true,
    },
    metadata: [
      {
        name: 'keywords',
        content:
          'Umut YILDIRIM, Umut Hope YILDIRIM, Umut, Hope, Yildirim, Portfolio, Blog, Gists, Tutorials, Projects, About',
      },
      {
        name: 'description',
        content: "Umut YILDIRIM's Portfolio Website",
      },
      {
        name: 'docsearch:language_tag',
        content: 'en',
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: '@umuthopeyildirim',
      },
      {
        name: 'twitter:creator',
        content: '@umuthopeyildirim',
      },
      {
        name: 'twitter:title',
        content: "Hope's Portfolio",
      },
      {
        name: 'twitter:description',
        content: "Umut YILDIRIM's Portfolio Website",
      },
      {
        name: 'twitter:image',
        content: 'https://umutyildirim.com/img/umutyildirim.png',
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
          to: 'blog',
          label: 'Blogs',
          position: 'left',
        },
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          to: 'projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: 'contact',
          label: 'Contact',
          position: 'left',
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
              html: '<a href="https://www.producthunt.com/posts/hope-s-portfolio?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-hope&#0045;s&#0045;portfolio" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=368405&theme=light" alt="Hope&#0039;s&#0032;Portfolio - My&#0032;own&#0032;personal&#0032;portfolio&#0044;&#0032;created&#0032;using&#0032;Docusaurus&#0033; | Product Hunt" style="width: 250px; height: 54px;" width="250" height="54" /></a>',
            },
            // I need to add my Stipe account to BuyMeACoffee. But I'm not US citizen so I can't do it.
            // {
            //   html: '<a target="_blank" href="https://www.buymeacoffee.com/hope"><img alt="BuyMeCoffee Button" src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=hope&button_colour=215fc5&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00" /></a>',
            // },
            {
              html: '<a href="https://twitter.com/hopesweaty?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-size="large" data-dnt="true" data-show-count="false">Follow @HopeSweaty</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
            },
          ],
        },
        {
          title: 'Discover',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            // {
            //   label: 'Docs',
            //   to: 'docs/intro',
            // },
            {
              label: 'Projects',
              to: 'projects',
            },
          ],
        },
        {
          title: 'Get To Know Me',
          items: [
            {
              label: 'My Resume',
              to: 'resume',
            },
            {
              label: 'Privacy Policy',
              to: 'privacy',
            },
            {
              label: 'Contact Me',
              to: 'contact',
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
            {
              label: 'mstodon.eu',
              rel: 'me',
              href: 'https://mstodon.eu/@hope',
            },
          ],
        },
      ],
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Umut Hope YILDIRIM. Built with <a href="https://docusaurus.io" target="_blank">Docusaurus🦖</a>`,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
