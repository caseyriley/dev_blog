import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
// import Dump from '../components/Dump';
import { Layout } from "../components/Layout";
import styled from "styled-components";
import "./index.css";
import "./gradientSelector.css";
import "./likeButton.css";
import "./mixMeldVolumeSlider.css";
import "./collapsibleEcoFilter.css";

const Background = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
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

const IndexWrapper = styled.main`
  font-family: "Raleway", "Farro", sans-serif;
  margin: 20px 0px 20px 0px;
  color: rgb(81, 240, 249);
  text-shadow: 1px 1px 2px black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin: 0px 0px 20px 20px;
  }
`;

const LinkBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0px 20px 0px;
  .link {
    width: fit-content;
  }
`;

const blogPostTemplate = ({ data, pageContext }) => {
  const { frontmatter, body, variables } = data.mdx;
  const { previous, next} = pageContext;
  return (
    <Background>
      <Layout>

        {/* <Dump previous={previous}/>
      <Dump next={next}/> */}
        <IndexWrapper>
          <h1 className={"blog-title"}>{frontmatter.title}</h1>
          <p className={"blog-date"}>{frontmatter.date}</p>
        </IndexWrapper>
        <div className={"text-wrapper"}>
            <MDXRenderer>{body}</MDXRenderer>
        </div>
        <LinkBottom>
          {previous && (
            <Link className={"link"} to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}

          {next === false ? null : (
            <>
              {next && (
                <Link className={"link"} to={next.fields.slug}>
                  <p>{next.frontmatter.title}</p>
                </Link>
              )}
            </>
          )}
        </LinkBottom>
      </Layout>
    </Background>
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
