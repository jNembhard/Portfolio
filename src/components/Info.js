import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { init } from "ityped";
import Zoom from "react-reveal/Zoom";

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
        <Zoom cascade delay={1500}>
          <h3>Hello I'm </h3>
          <h1>Jason Nembhard</h1>
        </Zoom>

        <h2>
          A <span ref={textRef}></span>
        </h2>
      </div>
      <Zoom delay={500}>
        <picture>
          <source
            media="(max-width:576px)"
            srcset={
              process.env.PUBLIC_URL + "images/info_page/sm_computer_2.jpg"
            }
          />
          <source
            media="(max-width:768px)"
            srcset={process.env.PUBLIC_URL + "images/info_page/md_computer.jpg"}
          />
          <source
            media="(max-width:1440px)"
            srcset={process.env.PUBLIC_URL + "images/info_page/lg_computer.jpg"}
          />
          <img
            src={process.env.PUBLIC_URL + "images/info_page/lg_computer.jpg"}
            alt="By Fotis Photopoulos on Unsplash"
          />
        </picture>
      </Zoom>
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

    @media (max-width: 768px) {
      position: relative;
      overflow-x: hidden;
    }

    @media (max-width: 576px) {
      overflow: auto;
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

    @media (max-width: 768px) {
      text-align: left;

      > h1 {
        font-size: 50px;
      }

      > h2 {
        font-size: 45px;
      }
    }

    @media (max-width: 375px) {
      > h1 {
        font-size: 48px;
      }
      > h2 {
        font-size: 43px;
      }
    }
  }
`;
