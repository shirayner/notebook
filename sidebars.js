/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  computerSidebar: [{ type: 'autogenerated', dirName: '计算机基础' }],
  backendSideBar: [{ type: 'autogenerated', dirName: 'Backend' }],
  frontendSideBar: [{ type: 'autogenerated', dirName: 'FrontEnd' }],
  LifeSideBar: [{ type: 'autogenerated', dirName: 'Life' }],
  markdownSideBar: [{ type: 'autogenerated', dirName: 'Markdown' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;
