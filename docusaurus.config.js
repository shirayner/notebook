// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// theme
const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// plantuml
const simplePlantUML = require("@akebifiky/remark-simple-plantuml");

// math-equations 
const math = require('remark-math');
const katex = require('rehype-katex');

const favicon = 'img/logo2.svg';
const logo = 'img/logo2.svg';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Ray',
  tagline: 'never stop study',
  favicon: favicon,

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
          remarkPlugins: [simplePlantUML, math],
          rehypePlugins: [katex],
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

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
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
          src: logo,
        },
        items: [
          {

            position: 'left',
            label: '后端',
            items: [
              {
                label: "Java",
                to: "docs/category/Java"
              },
              {
                label: "数据库",
                to: "docs/category/数据库"
              },
            ]
          },
          {
            label: "操作系统",
            to: "docs/category/操作系统"
          },
          {
            type: 'doc',
            docId: 'FrontEnd/index',
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
            type: 'doc',
            docId: 'Inbox/README',
            position: 'right',
            label: 'Inbox',
          },
          {
            href: '/docs/tags',
            position: 'right',
            label: 'Tags',
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
        additionalLanguages: ["java", "sql", "properties"],
      },
    }),
};

module.exports = config;
