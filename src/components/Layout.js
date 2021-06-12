import React from "react";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";

const AppStyles = styled.main`
  margin: 0px 20px 20px 20px;
  height: 100vh;
  width: calc(100vw - 40px);
  overflow-y: scroll;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <>
      <AppStyles>
        <Header
          siteTitle={title}
          siteDescription={description}
          page={"About"}
        />
        {children}
      </AppStyles>
    </>
  );
};
