module.exports = {
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "en",
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jeececab - Front-end developer",
        short_name: "Jeececab",
        description:
          "Personal website of Jean-Christophe Séguin Cabana (aka Jeececab), front-end developer based in Montreal.",
        lang: "en",
        display: "standalone",
        icon: `src/images/favicon.png`,
        start_url: "/",
        background_color: "#080808",
        theme_color: `#00bb92`,
        localize: [
          {
            start_url: "/fr/",
            lang: "fr",
            name: "Jeececab - Développeur Front-end",
            short_name: "Jeececab",
            description:
              "Site Web personnel de Jean-Christophe Séguin Cabana (aka Jeececab), développeur front-end basé à Montréal.",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
}
