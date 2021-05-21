import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import "./index.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Farro:wght@500&family=Raleway&display=swap');
</style>;
const HeaderStyles = styled.header`
  font-family: "Raleway", "Farro", sans-serif;
  margin: 20px 0px 20px 0px;
`;

export const Header = ({ siteTitle, siteDescription }) => (
  <HeaderStyles>
    <Link class={"link"} to="/">
      <h1 >{siteTitle}</h1>
      <p >{siteDescription}</p>
    </Link>
    <div class={"link-box"}>
      <Link
        class={"link"}
        to="https://caseyriley.github.io/"
        target="_blank"
      >
        My Portfolio Site
      </Link>
      <Link
        class={"link"}
        to="https://github.com/caseyriley"
        target="_blank"
      >
        Github
      </Link>
      <Link
        class={"link"}
        to="https://www.linkedin.com/in/casey-riley-3396231a1/"
        target="_blank"
      >
        Linkedin
      </Link>
      <Link
        class={"link"}
        to="https://angel.co/u/casey-riley-1"
        target="_blank"
      >
        Angelist
      </Link>
    </div>
  </HeaderStyles>
);
