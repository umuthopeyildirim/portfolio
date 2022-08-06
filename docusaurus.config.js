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
  url: 'https://umutyildirim.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hopesweaty', // Usually your GitHub org/user name.
  projectName: 'portfolio', // Usually your repo name.

  plugins: [
    [
      'docusaurus-plugin-content-gists',
      {
        enabled: true,
        verbose: false,
        personalAccessToken: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
      },
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
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [{name: 'keywords', content: 'Umut YILDIRIM, Umut Hope YILDIRIM, Umut, Hope, Yildirim, Portfolio, Blog, Gists, Tutorials, Projects, About'}],
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
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: 'blog', 
            label: 'Blog', 
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
            href: 'https://github.com/hopesweaty/',
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
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Style Guide',
                to: 'docs/',
              },
              {
                label: 'Second Doc',
                to: 'docs/doc2',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
          {
            title: 'Legal',
            // Please do not remove the privacy and terms, it's a legal requirement.
            items: [
              {
                label: 'Privacy',
                href: 'https://opensource.fb.com/legal/privacy/',
              },
              {
                label: 'Terms',
                href: 'https://opensource.fb.com/legal/terms/',
              },
              {
                label: 'Data Policy',
                href: 'https://opensource.fb.com/legal/data-policy/',
              },
              {
                label: 'Cookie Policy',
                href: 'https://opensource.fb.com/legal/cookie-policy/',
              },
            ],
          },
        ],
        // Please do not remove the credits, help to publicize Docusaurus :)
        copyright: `Copyright © ${new Date().getFullYear()} Umut Hope YILDIRIM. Built with Docusaurus🦖`,
      },
    }),
};

module.exports = config;
