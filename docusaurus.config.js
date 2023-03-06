// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Shiptyou",
  tagline: "",
  url: "https://auth0.shiptyou.net",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "shiptyou", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  plugins: [
    "tailwind-loader",
    [
      "@docusaurus/plugin-google-analytics",
      {
        trackingID: "UA-223037359-1",
        anonymizeIP: true,
      },
    ],
    [
      "@cmfcmf/docusaurus-search-local",
      {
        indexDocs: true,
        language: "en",
      },
    ],
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/telestel/docs/edit/main/",
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    // Redocusaurus config
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        specs: [],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: "#1890ff",
          options: {
            hideHostname: true,
          },
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/logo.png",
      metaImage: "img/logo.png",
      navbar: {
        // title: 'Shiptyou',
        logo: {
          alt: "Shiptyou",
          src: "img/logo.png",
          srcDark: "img/logo.png",
          height: 40,
        },
        items: [
          {
            to: "/product",
            position: "left",
            label: "Product",
          },
          {
            to: "/reference",
            position: "left",
            label: "Reference",
          },
          {
            to: "/carriers",
            position: "left",
            label: "Carriers",
          },
          {
            href: "https://github.com/telestel/docs",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Docs",
                to: "/",
              },
              {
                label: "Product",
                to: "/product",
              },
              {
                label: "Reference",
                to: "/reference",
              },
              {
                label: "Carriers",
                to: "/carriers",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/telestel/docs",
              },
            ],
          },
          {
            title: "About Us",
            items: [
              {
                label: "Shiptyou",
                href: "https://auth0.shiptyou.net",
              },
            ],
          },
        ],
        logo: {
          alt: "Shiptyou",
          src: "img/logo.png",
        },
        copyright: `Copyright © ${new Date().getFullYear()} Shiptyou Inc.`,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      prism: {
        defaultLanguage: "js",
        additionalLanguages: ["json"],
        plugins: ["line-numbers", "show-language"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
