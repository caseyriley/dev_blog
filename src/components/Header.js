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
    <Link to="/">
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
    <div class={"link-box"}>
      <Link to="https://caseyriley.github.io/" target="_blank">My Portfolio Site</Link>
      <Link to="https://github.com/caseyriley" target="_blank">Github</Link>
      <Link to="https://www.linkedin.com/in/casey-riley-3396231a1/" target="_blank">
        Linkedin
      </Link>
      <Link to="https://angel.co/u/casey-riley-1" target="_blank">Angelist</Link>
    </div>
  </HeaderStyles>
);
