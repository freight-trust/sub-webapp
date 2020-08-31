module.exports = {
  siteMetadata: {
    title: "TrueNFT GitBadges",
    description: "A site to apply for TruueNFT badges.",
    keywords: "carbon,design,system,badges,tutorial,acclaim",
    lang: "en",
  },
  pathPrefix: ``,
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Freight Trust TrueNFT System Badges",
        short_name: "Freight Trust TrueNFT Badges",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0062ff",
        display: "browser",
      },
    },
    {
      resolve: "gatsby-theme-carbon",
      options: {
        isSearchEnabled: false,
        repository: {
          baseUrl: "https://github.com/freight-trust/truenft-badges",
          branch: "master",
        },
      },
    },
  ],
};
