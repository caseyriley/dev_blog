import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import "./index.css";
import Lottie from "react-lottie";
import animationData from "../assets/67724-isometric-falling-blocks.json";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Farro:wght@500&family=Raleway&display=swap');
</style>;
const HeaderStyles = styled.header`
  font-family: "Raleway", "Farro", sans-serif;
  margin: 20px 0px 20px 0px;
  .header-top {
    // diplay: flex;
    // flex-direction: column;
    // align-items: center;
    // justify-content: flex-start;
    // p {
    //   position: relative;
    //   top: -20px;
    // }
    h1 {
      margin: 0px 0px 20px 0px;
    }
  }
`;
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export const Header = ({ siteTitle, siteDescription, page }) => (
  <HeaderStyles>
    <div className={"header-position"}>
      <div className={"header-top"}>
        <Link className={"top-link"} to="/">
          <h1>{siteTitle}</h1>
          <p>{siteDescription}</p>
        </Link>
        <div className={"lottie"}>
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>
    </div>

    <div className={"link-box-c"}>
      <div className={"link-box"}>
        <Link
          className={"link"}
          to="https://caseyriley.github.io/"
          target="_blank"
        >
          <span className={"portfolio"}>My</span> Portfolio <span className={"portfolio"}>Site</span>
        </Link>
        <Link
          className={"link"}
          to="https://github.com/caseyriley"
          target="_blank"
        >
          Github
        </Link>
        <Link
          className={"link"}
          to="https://www.linkedin.com/in/casey-riley-3396231a1/"
          target="_blank"
        >
          Linkedin
        </Link>
        <Link
          className={"link"}
          to="https://angel.co/u/casey-riley-1"
          target="_blank"
        >
          Angelist
        </Link>
        <Link
          className={"link"}
          to={`/${page === "Home" ? "" : page.toLowerCase()}`}
        >
          {page}
        </Link>
      </div>
      <div className={"link-box-shadow"} />
    </div>
  </HeaderStyles>
);
