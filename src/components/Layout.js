import React from 'react';
import styled from 'styled-components';
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import {Header} from './Header'

const AppStyles = styled.main`

  margin: 0;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0px;
  left; 0px;
  right: 0px;
  bottom: 0px;
  overflow-y: scroll;
`;

export const Layout = ({children}) => {
  const {title, description} = useSiteMetadata();
  return (
    <>
      <AppStyles>
        <Header siteTitle={title} siteDescription={description} />
        {children}
      </AppStyles>
    </>
  );
};