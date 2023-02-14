// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ray',
  tagline: 'never stop study',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shirayner.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/notebook/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'shirayner', // Usually your GitHub org/user name.
  projectName: 'notebook', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [simplePlantUML],
          editUrl:
            'https://github.com/shirayner/notebook/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
          'https://github.com/shirayner/notebook/tree/master/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 5,
      },
      navbar: {
        title: 'Ray',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: '计算机基础/index',
            position: 'left',
            label: '计算机基础',
          },
          {
            type: 'doc',
            docId: '后端/index',
            position: 'left',
            label: '后端',
          },
          {
            type: 'doc',
            docId: '前端/index',
            position: 'left',
            label: '前端',
          },
          {
            type: 'doc',
            docId: 'Markdown/README',
            position: 'left',
            label: 'Markdown',
          },
          {
            href: '/docs/tags',
            position: 'right',
            label: 'tags',
          },
          {
            href: 'https://github.com/shirayner',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '关于',
                to: '/docs/about',
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
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ray, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["java","sql"],
      },
    }),
};

module.exports = config;
