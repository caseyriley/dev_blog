import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';
<style>
@import url('https://fonts.googleapis.com/css2?family=Farro:wght@500&family=Raleway&display=swap');
</style>
const HeaderStyles = styled.header`
font-family: 'Raleway', 'Farro', sans-serif;
margin: 20px 20px 20px 20px;
`;

export const Header = ({ siteTitle, siteDescription }) => (
  <HeaderStyles>
    <Link to="/">
      <h1>{siteTitle}</h1>
      <p>{siteDescription}</p>
    </Link>
  </HeaderStyles>
);
