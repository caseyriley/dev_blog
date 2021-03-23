import React from 'react';
import styled from 'styled-components';
import {useSiteMetadata} from '../hooks/useSiteMetadata';
import {Header} from './Header'

const AppStyles = styled.main`
  max-width: 590px;
  margin: 0 auto;
  .post-image {
    width: 590px;
  }
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