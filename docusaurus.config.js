module.exports = {
  title: "Belajar Golang",
  tagline: "Belajar Dengan Jenius Golang",
  url: "https://jeniusgolang.netlify.app",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Belajar Dengan Jenius Golang",
      logo: {
        alt: "Belajar Golang",
        src: "img/logo.svg"
      },
      links: [
        {
          to: "docs/intro",
          activeBasePath: "intro",
          label: "Intro",
          position: "left"
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/mdestafadilah/JeniusGolang",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Style Guide",
              to: "docs/doc1"
            },
            {
              label: "Second Doc",
              to: "docs/doc2"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Belajar Dengan Jenius Golang Oleh Gun Gun Febrianza dan Konversi Ke Web Oleh Topidesta.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/topidesta/JeniusGolang/"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ],
  themes: ["@docusaurus/theme-classic"],
  plugins: ["docusaurus-lunr-search"]
};
