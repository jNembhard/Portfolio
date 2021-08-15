import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { init } from "ityped";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";

function Info() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer.", "Designer.", "Content Creator."],
    });
  }, []);

  return (
    <IntroWrapper>
      <div class="content">
        <Zoom cascade delay={1400}>
          <h3>Hello I'm </h3>
          <h1>Jason Nembhard</h1>
        </Zoom>

        <h2>
          A <span ref={textRef}></span>
        </h2>
      </div>

      <picture>
        <Fade>
          <source
            media="(max-width:400px)"
            srcset={
              process.env.PUBLIC_URL + "images/info_page/sm_computer_1.jpg"
            }
          />
        </Fade>
        <Fade>
          <source
            media="(min-width: 410px) and (max-width:576px)"
            srcset={
              process.env.PUBLIC_URL + "images/info_page/sm_computer_2.jpg"
            }
          />
        </Fade>
        <Fade>
          <source
            media="(max-width:768px)"
            srcset={process.env.PUBLIC_URL + "images/info_page/md_computer.jpg"}
          />
        </Fade>
        <Fade>
          <source
            media="(min-width:600px) and (max-width:740px) and (orientation: landscape)"
            srcset={
              process.env.PUBLIC_URL +
              "images/info_page/md_computer_landscape_small.jpg"
            }
          />
        </Fade>
        <Fade>
          <source
            media="(max-width:900px) and (orientation: landscape)"
            srcset={
              process.env.PUBLIC_URL +
              "images/info_page/md_computer_landscape.jpg"
            }
          />
        </Fade>
        <Fade>
          <source
            media="(max-width:1440px)"
            srcset={process.env.PUBLIC_URL + "images/info_page/lg_computer.jpg"}
          />
        </Fade>
        <Fade>
          <img
            src={process.env.PUBLIC_URL + "images/info_page/lg_computer.jpg"}
            alt="By Fotis Photopoulos on Unsplash"
          />
        </Fade>
      </picture>
    </IntroWrapper>
  );
}

export default Info;

const IntroWrapper = styled.div`
  display: flex;
  padding-bottom: 150px;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;

  > picture {
    position: absolute;
    filter: brightness(30%);

    > source {
      z-index: -2;
      display: block;
      width: auto;
      height: auto;
      object-fit: contain;
    }

    > img {
      z-index: -2;
      display: block;
      width: auto;
      height: auto;
      object-fit: contain;
    }

    @media (min-width: 568px) and (max-width: 1370px) and (orientation: landscape) {
      position: relative;
      overflow: hidden;
      margin-bottom: 0;
      object-fit: cover;

      > picture {
        > source {
          width: auto;
          height: auto;
          object-fit: contain;
        }
        > img {
          width: auto;
          height: auto;
          object-fit: contain;
        }
      }
    }

    @media (max-width: 768px) {
      position: relative;
      overflow-x: hidden;
      margin-bottom: 0;
    }

    @media (max-width: 576px) {
      overflow: hidden;
      margin-bottom: 220px;
      > picture {
        > source {
          overflow-x: hidden;
          object-fit: contain;
          width: auto;
          height: auto;
        }
        > img {
          object-fit: contain;
          width: auto;
          height: auto;
        }
      }
    }
  }

  .content {
    position: absolute;
    z-index: 3;
    flex-direction: column;
    display: flex;
    align-items: left;
    justify-content: center;
    color: #ffffff;

    > h1 {
      font-size: 80px;
    }

    > h2 {
      font-size: 50px;
      > span {
        color: crimson;
      }
    }

    > h3 {
      color: transparent;
      font-size: 40px;
      -webkit-text-stroke: 2px #ffffff;
    }

    @media (min-width: 740px) and (max-width: 2000px) and (orientation: landscape) {
      margin-top: 20%;
    }

    @media (min-width: 400px) and (max-width: 740px) and (orientation: landscape) {
      top: 25%;
      > h1 {
        font-size: 60px;
      }
    }

    @media (max-width: 768px) and (orientation: portrait) {
      margin-top: inherit;
      text-align: left;

      > h1 {
        font-size: 50px;
      }

      > h2 {
        font-size: 45px;
      }
    }

    @media (max-width: 376px) {
      > h1 {
        font-size: 47px;
      }
      > h2 {
        font-size: 43px;
      }
    }
  }
`;
