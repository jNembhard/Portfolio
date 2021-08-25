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
        <Zoom cascade delay={1300}>
          <h3>Hello I'm </h3>
          <h1>Jason Nembhard</h1>
        </Zoom>
        <Zoom casade delay={1400}>
          <h2>
            A <span ref={textRef}></span>
          </h2>
        </Zoom>
      </div>

      <picture>
        <source
          media="(max-width:576px)"
          srcset={
            process.env.PUBLIC_URL + "images/info_page/sm_computer-portrait.jpg"
          }
        />
        <source
          media="(max-width:768px)"
          srcset={process.env.PUBLIC_URL + "images/info_page/md_computer.jpg"}
        />
        <source
          media="(min-width:600px) and (max-width:740px) and (orientation: landscape)"
          srcset={
            process.env.PUBLIC_URL +
            "images/info_page/sm_computer-800_landscape.jpg"
          }
        />
        <source
          media="(max-width:900px) and (orientation: landscape)"
          srcset={process.env.PUBLIC_URL + "images/info_page/md_computer.jpg"}
        />
        <source
          media="(min-width:1023px) and (max-width:1025px) and (orientation: portrait)"
          srcset={process.env.PUBLIC_URL + "images/info_page/lg_computer.jpg"}
        />
        <source
          media="(min-width:1025px) and (max-width:1440px)"
          srcset={
            process.env.PUBLIC_URL + "images/info_page/lg_computer-1440.jpg"
          }
        />
        <img
          src={process.env.PUBLIC_URL + "images/info_page/lg_computer.jpg"}
          alt="By Fotis Photopoulos on Unsplash"
        />
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

  > picture {
    position: absolute;
    filter: brightness(30%);

    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;

    @keyframes fadeInAnimation {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

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
        animation: fadeInAnimation ease 2s;
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
      margin-top: 10%;
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
