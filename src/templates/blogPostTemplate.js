import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
// import Dump from '../components/Dump';
import { Layout } from "../components/Layout";
import styled from "styled-components";

const IndexWrapper = styled.main`
  font-family: "Raleway", "Farro", sans-serif;
  margin: 20px 0px 20px 0px;
  border: 1px solid green;
`;



const blogPostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (

      <Layout>
        {/* <Dump previous={previous}/>
      <Dump next={next}/> */}
        <IndexWrapper>
          <h1 class={"blog-tile"}>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
        </IndexWrapper>

        <MDXRenderer>{body}</MDXRenderer>

        {previous && (
          <Link to={previous.fields.slug}>
            <p>{previous.frontmatter.title}</p>
          </Link>
        )}

        {next === false ? null : (
          <>
            {next && (
              <Link to={next.fields.slug}>
                <p>{next.frontmatter.title}</p>
              </Link>
            )}
          </>
        )}
      </Layout>

  );
};
export default blogPostTemplate;
export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;
