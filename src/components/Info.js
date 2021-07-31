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
        <ImageContainer>
          <Title>
            <h6>Hello I'm</h6>
            <h1>Jason Nembhard.</h1>
            <h2>
              A <span ref={textRef}></span>
            </h2>
          </Title>
        </ImageContainer>
      </Left>

      <PortfolioAnchor>
        <ChevronArrow color="black" size="3x" fas icon="chevron-down" />
      </PortfolioAnchor>
    </IntroWrapper>
  );
}

export default Info;

const IntroWrapper = styled.div`
  background-color: white;
  display: flex;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    /* flex-direction: column; */
    align-items: center;
    padding-bottom: 280px;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  width: 600px;
  height: 600px;
  background-color: crimson;
  border-radius: 50%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  float: right;
  padding-top: 200px;

  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: center;
    padding-top: 80px;
    width: 350px;
    height: 350px;
  }

  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 500px) {
    padding-top: 150px;
  }
`;

const Title = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  left: 400px;
  color: #111;

  > h1 {
    font-size: 72px;
  }

  > h2 {
    font-size: 38px;
  }

  > h2 > span {
    font-size: inherit;
    font-size: 37px;
  }

  > h6 {
    font-size: 22px;
  }

  @media (max-width: 768px) {
    align-items: left;
    padding-left: 80px;
    padding-bottom: 400px;
    left: 5px;
    > h1 {
      font-size: 50px;
    }
  }

  @media (max-width: 500px) {
    padding-bottom: 730px;
    padding-left: 55px;
    > h1 {
      font-size: 40px;
    }

    > h2 {
      font-size: 27px;
      > span {
        font-size: 27px;
      }
    }

    > h6 {
      font-size: 16px;
    }
  }

  @media (max-width: 375px) {
    /* padding-top: 200px; */
  }
`;

const PortfolioAnchor = styled.div`
  position: absolute;
  bottom: 2px;
  left: 70%;

  @media (max-width: 768px) {
    left: 45%;
    bottom: 20px;
  }

  @media (max-width: 499px) {
    bottom: 450px;
  }
`;

const ChevronArrow = styled(MDBIcon)`
  overflow-x: hidden;
  overflow-y: hidden;
  @media (max-width: 376px) {
    display: none;
  }
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
