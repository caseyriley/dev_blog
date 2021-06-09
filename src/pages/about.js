import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import "./index.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Farro:wght@500&family=Raleway&display=swap');
</style>;

const AboutStyles = styled.main`
  margin: 0px 20px 20px 20px;
  height: 100vh;
  width: calc(100vw - 40px);
  overflow-y: scroll;
`;

const About = () => {
  return (
    <AboutStyles>
        <Header />
   
    </AboutStyles>
  );
};

export default About;
