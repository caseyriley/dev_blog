import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
// import Img from 'gatsby-image';
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

import "./index.css"
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Farro:wght@500&family=Raleway&display=swap');
</style>;

const IndexWrapper = styled.main`
  font-family: "Raleway", "Farro", sans-serif;
  margin: 20px 0px 20px 0px;
`;

const PostWrapper = styled.div``;

// const Image = styled(Img)`
//   border-radius: 5px;
// `;

const indexComponent = ({ data }) => {
  return (
    <Layout>
      <IndexWrapper>
        {/* <Dump data={data}></Dump> */}
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          // console.log("data.allMdx=======>",data.allMdx)
          // const image = frontmatter.cover.publicURL;
          <PostWrapper key={id}>
            <Link class={"link"} to={fields.slug}>
              {console.log(
                "frontmatter.cover.childImageSharp.fixed=====>",
                frontmatter.cover.childImageSharp.gatsbyImageData
              )}
              <GatsbyImage
                className="post-image"
                image={frontmatter.cover.childImageSharp.gatsbyImageData}
                alt={""}
                layout="fixed"
              />

              <h1 class="blog-title">{frontmatter.title}</h1>
              <p>{frontmatter.date}</p>
              <p>{excerpt}</p>
            </Link>
          </PostWrapper>
        ))}
      </IndexWrapper>
    </Layout>
  );
};
export default indexComponent;
export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          cover {
            publicURL
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`;
