import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { init } from "ityped";

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
      <Left>
        <ImageContainer>
          <img
            // src="https://c.stocksy.com/a/lwR200/z9/584087.jpg"
            alt="portfolio intro"
          />
        </ImageContainer>
      </Left>
      <Right>
        <Title>
          <h6>Hello</h6>
          <h1>I'm Jason Nembhard.</h1>
          <h2>
            A <span ref={textRef}></span>
          </h2>
        </Title>
        <PortfolioAnchor>
          <img alt="scroll down" />
        </PortfolioAnchor>
      </Right>
    </IntroWrapper>
  );
}

export default Info;

const IntroWrapper = styled.div`
  background-color: white;
  display: flex;
  overflow-x: hidden;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 100px;
  }
`;

const Left = styled.div`
  flex: 0.5;
  overflow: hidden;
`;

const Right = styled.div`
  flex: 0.5;
  position: relative;
`;

const ImageContainer = styled.div`
  width: 700px;
  height: 700px;
  background-color: crimson;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  float: right;

  > img {
    height: 90%;
  }

  @media (max-width: 768px) {
    align-items: flex-start;

    > img {
      height: 50%;
    }
  }
`;
const Title = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  > h1 {
    font-size: 60px;
  }

  > h2 > span {
    font-size: inherit;
    color: crimson;
    font-size: 30px;
  }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;

    > h1 {
      font-size: 50px;
    }
  }
`;

const PortfolioAnchor = styled.a`
  position: absolute;
  bottom: 10px;
  left: 40%;

  > img {
    width: 30px;
    /* animation: perform arrow keyframes */
  }
`;
