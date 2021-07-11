import { Link, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
// import Img from 'gatsby-image';
import React from "react";
import styled from "styled-components";
import { Layout } from "../components/Layout";

import "./index.css";
import "./mScreenW4000.css";
import "./mScreenW2500.css";
import "./mScreenW2000.css";
import "./mScreenW1500.css";
import "./mScreenW1000.css";
import "./mScreenW600.css";
import "./mScreenW700.css";
import "./mScreenW800.css";
import "./mScreenW500.css";
import "./mScreenW400.css";

<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Farro:wght@500&family=Raleway&display=swap');
</style>;

const Background = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to top right,
    rgb(101, 115, 255),
    rgb(114, 107, 246),
    rgb(127, 99, 237),
    rgb(139, 92, 228),
    rgb(152, 84, 219),
    rgb(165, 76, 210),
    rgb(178, 68, 202),
    rgb(191, 60, 193),
    rgb(204, 52, 184),
    rgb(216, 45, 175),
    rgb(229, 37, 166),
    rgb(242, 29, 157)
  );
`;

const indexComponent = ({ data }) => {
  console.log("data", data);
  return (
    <Background>
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
    </Background>
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
                width: 800
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
