import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { init } from "ityped";
import { MDBIcon } from "mdb-react-ui-kit";

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
        <ImageContainer />
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
          <ChevronArrow color="black" size="3x" fas icon="chevron-down" />
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
    padding-bottom: 160px;
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
    width: 600px;
    height: 600px;

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
    padding-left: 0;
    padding-bottom: 80px;

    > h1 {
      font-size: 38px;
    }
  }
`;

const PortfolioAnchor = styled.div`
  position: absolute;
  bottom: 10px;
  left: 40%;

  @media (max-width: 768px) {
    left: 45%;
  }
`;

const ChevronArrow = styled(MDBIcon)`
  overflow-x: hidden;
  overflow-y: hidden;
  @keyframes animateDown {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(5px);
    }

    60% {
      transform: translateY(3px);
    }
  }

  animation: animateDown 1.5s infinite;
`;
