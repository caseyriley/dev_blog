import React from "react";
import styled from "styled-components";
import { Header } from "../components/Header";
import "./index.css";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Farro:wght@500&family=Raleway&display=swap');
</style>;

const Background = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
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
const AboutStyles = styled.main`
  margin: 0px 20px 20px 20px;
  height: 100vh;
  width: calc(100vw - 40px);
  overflow-y: scroll;
  font-family: "Raleway", "Farro", sans-serif;
  .paragraph-box {
    height: min-content;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-emd;
    position: relative;
    margin: 0px 0px 80px 0px;
  }
  .paragraphs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    border: 1px solid lightgrey;
    font-size: 20px;
    margin: 0px 0px 0px 0px;
    border-radius: 10px;
    background-color: white;
    z-index: 2;
    p {
      margin-left: 20px;
    }
  }
  .paragraph-box-shadow {
    height: 100%;
    width: calc(100% - 40px);
    box-shadow: 0px 8px 20px 0px rgba(86, 68, 68, 1);
    position: absolute;
    top: 0px;
    pointer-events: none;
    border-radius: 10px;
  }
`;

const About = () => {
  return (
    <>
      <Background>
        <AboutStyles>
          <Header page={"Home"} />
          <div className={"paragraph-box"}>
            <div className={"paragraphs"}>
              <p>Hello people,</p>
              <p>
                My name is Casey Riley and since this is my dev blog I decided
                to write a little about myself.
              </p>
              <p>
                Originally from Corvallis Oregon USA I have always been
                interested in forms of expression and got into Web Development
                through my interest in digital art software such as Adobe
                Photoshop, Adobe Illustrator, and Zbrush.
              </p>
              <p>
                Seeing my art people organically began to ask me to build them
                websites. After making a handful of websites for friends on
                platforms such as SquareSpace I began meeting some Software
                Engineers.
              </p>
              <p>
                Through the stories of my new friends professional journeys I
                began to dream myself on a Software Engineer path, and working
                in an amazing culture. With a bag of new tricks I could change
                the world.
              </p>
              <p>
                After much aplying I got accepted to a Full Stack Software
                Engineer Coding Bootcamp known as App Academy. There were other
                bootcamps that accepted me and even offered me scholarships and
                grants but App Academy offered me the human connection I was
                looking for.
              </p>
              <p>
                The next 9 months were intensely challenging but hard work
                persevered and I graduated. If it wasn’t for all the amazing
                teachers and students at App Academy I never could have learned
                at the pace I did. Pair programming five days a week with some
                of the most brilliant people I had ever met was transformative
                in the least.
              </p>
              <p>
                Soon after graduating App Academy I started volunteering for a
                non-profit named Aranya Solutions. Aranya Solutions purpose is
                to enrich the quality of life within targeted economically
                challenged and developing areas such as Nepal, Uganda and Burma.
                Aranya Solutions method is to assist communities to implement
                environmentally friendly building and agricultural methods, life
                skills workshops, local business development, leadership
                training, education initiatives, and capacity building.
              </p>
              <p>
                My decision to volunteer for Aranya Solutions was made a long
                time before I even decided to study coding. My friend Katrina
                Zavalney founded Aranya Solutions, and I had admired her work
                for many years. Finally I was able to contribute and I got to
                use my new skills.
              </p>
              <p>
                I believe my contributions to Aranya Solutions helped us to get
                more and larger donations.
              </p>
              <p>
                In May 2021 I began working as a Web Developer Intern at
                Ecomadic. Ecomadic is a eco-tourism platform that allows for
                many things such as finding cheap flights, offsetting your
                carbon, and booking amazing experiences that don’t impact local
                economies in a negative way.
              </p>
              <p>
                Under the guidance of Ecomadic’s talented lead developer Amir
                Goudarziha, I am learning from the best. Our tech stack is cool
                too! We're using ReactJS, Redux, TypeScript, Python, Django,
                Styled Components, and Storybook so far. Everyone at Ecomadic is
                fun and exciting to work with. I wish this was my forever
                position but forever is a long time anyway.
              </p>
              <p>
                Most of my journey since graduating in October of 2020 has been
                a deep dive into my solo projects. I have been hungry to learn
                new technologies and that is clearly visible in my portfolio.
              </p>
              <p>
                Almost every new person I meet has something to share about the
                tech world. Our future revolves around the technologies we
                embrace and the advancements we make. Let’s make good choices.
              </p>
              <p>Thank you for reading this!</p>
              <p>Sincerely,</p>
              <p>Casey Riley</p>
            </div>
            <div className={"paragraph-box-shadow"} />
          </div>
        </AboutStyles>
      </Background>
    </>
  )
}

export default About;
