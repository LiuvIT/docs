/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'Liuv',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/liuv.png',
    infoLink: 'https://www.liuv.it',
    pinned: true,
  },
];

const siteConfig = {

  cname: 'docs.liuv.it',

  docsUrl: '',  

  title: 'Liuv Docs',
  tagline: 'Documentação de guias da Liuv',
  baseUrl: '/',
  url: 'https://liuv.github.io',

  // Used for publishing and more
  projectName: 'docs',
  organizationName: 'LiuvIT',


  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: 'help', label: 'Help' },
    { search: true },
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/liuv_degrade.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',

  /* Colors for website */
  colors: {
    primaryColor: '#F75935',
    secondaryColor: '#F0364A',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Liuv`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'dracula'
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://unpkg.com/feather-icons'
  ],

  stylesheets: [
    'https://fonts.googleapis.com/css?family=Noto+Sans:400,700',
    'https://use.fontawesome.com/releases/v5.8.1/css/all.css'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  algolia: {
    apiKey: '5dc671a599b5bd99be02331f2d567b97',
    indexName: 'liuv',
    placeholder: 'Buscar',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
};

module.exports = siteConfig;
