const siteMetadata = {
  title: `Code Journey`,
  description: `Hi welcome to Casey Riley's coding blog.`,
};

module.exports = {
  pathPrefix: `/dev_blog`,
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            // options: {
            //   maxWidth: 590,
            // },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            // options: {
            //   maxWidth: 590,
            // },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: { path: `${__dirname}/posts`, name: `posts` },
    },
  ],
};