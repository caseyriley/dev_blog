import { Link, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
// import Img from 'gatsby-image';
import React from "react";
// import styled from "styled-components";
import { Layout } from "../components/Layout";

import "./index.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Farro:wght@500&family=Raleway&display=swap');
</style>;

// const IndexWrapper = styled.main`
//   font-family: "Raleway", "Farro", sans-serif;
//   margin: 20px 0px 20px 0px;
// `;

// const PostWrapper = styled.div`
//   border: 2px solid green;
// `;

// const Image = styled(Img)`
//   border-radius: 5px;
// `;

const indexComponent = ({ data }) => {
  console.log("data", data);
  return (
    <Layout>
      <div className={"index-wrapper"}>
        {/* <Dump data={data}></Dump> */}
        {data.allMdx.nodes.map(({ id, excerpt, frontmatter, fields }) => (
          // console.log("data.allMdx=======>",data.allMdx)
          // const image = frontmatter.cover.publicURL;
          <div key={id} className={"post-box"}>
            <Link class={"link post-wrapper"} to={fields.slug}>
              {console.log(
                "frontmatter.cover.childImageSharp.fixed=====>",
                frontmatter.cover.publicURL
              )}

              <GatsbyImage
                className={"post-image"}
                image={frontmatter.cover.childImageSharp.gatsbyImageData}
                alt={"blog-image"}
              />
              {/* <img className={"post-img"} src={frontmatter.cover.publicURL} /> */}

              <h1 className="blog-title">{frontmatter.title}</h1>
              <p className={"blog-p"}>{frontmatter.date}</p>
              <p className={"blog-p"}>{excerpt}</p>
            </Link>
            <div className={"post-box__shadow"} />
          </div>
        ))}
      </div>
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
