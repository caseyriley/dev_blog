import { Link, graphql } from 'gatsby';
import {GatsbyImage} from "gatsby-plugin-image"
// import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';

import "./index.css"

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

// const Image = styled(Img)`
//   border-radius: 5px;
// `;



const indexComponent = ({ data }) => {

  return (
    <Layout>
      <IndexWrapper>
        {/* <Dump data={data}></Dump> */}
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            // console.log("data.allMdx=======>",data.allMdx)
            // const image = frontmatter.cover.publicURL;
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                {console.log("frontmatter.cover.childImageSharp.fixed=====>",frontmatter.cover.childImageSharp.gatsbyImageData)}
                <GatsbyImage  className="post-image" image={frontmatter.cover.childImageSharp.gatsbyImageData} alt={""}
                layout="fixed"
                />
                
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          )
        )}
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
                layout: FIXED
                width: 500
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