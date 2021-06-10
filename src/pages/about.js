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
  font-family: "Raleway", "Farro", sans-serif;
  .paragraph {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    border: 1px solid lightgrey;
    font-size: 20px;




    p {
      margin-left: 20px;
    }
  }
`;

const About = () => {
  return (
    <AboutStyles>
        <Header page={"Home"}/>
        <div className={"paragraph"}>
        <p>Hello people,</p>
        <p>my name is Casey Riley and since this is my dev blog I decided to write a little about myself and the technologies behind this blog. </p>
        <p>Originally from Corvallis Oregon I have always been interested in forms of expression and got into Web Development through my interest in 
          digital art software such as Adobe Photoshop, Adobe Illustrator and Zbrush. Seeing my art people organically began to ask me to make them websites. 
          After making a handfull of websites for friends on platforms such as Square Space I began meeting some Software Engineers. Through the sories
          of my new fiends progessional journeys I began to dream myself to be a Software Engineer working in a amazing work culture with a bag of 
          new tricks that would empower me to change the world with my code.
        </p>
        </div>

    </AboutStyles>
  );
};

export default About;
