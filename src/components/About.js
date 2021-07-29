import React from "react";
import MainSkills from "./MainSkills";
import styled from "styled-components";

function About() {
  return (
    <AboutWrap id="about">
      <HeaderContainer>
        <DescriptionWrap>
          <DescriptionContainer>
            <AboutTitle>
              <h2>About Me</h2>
            </AboutTitle>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which dont look even slightly
            believable. If you are going to use a passage of Lorem Ipsum,
          </DescriptionContainer>
          <MainSKillsWrap>
            <MainSkills />
          </MainSKillsWrap>
        </DescriptionWrap>
      </HeaderContainer>
    </AboutWrap>
  );
}

export default About;

const AboutWrap = styled.div`
  background-color: white;

  padding-bottom: 120px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 100px;
    align-items: center;
    justify-content: center;
  }
`;
const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  font-size: 60px;
  > h2 {
    font-size: 60px;
  }
  @media (max-width: 768px) {
    > h2 {
      font-size: 55px;
    }
  }
`;

const HeaderContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const MainSKillsWrap = styled.div`
  padding-top: 30px;
  background-color: yellow;
  flex: 8;
`;

const DescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
  height: 500px;

  @media (max-width: 768px) {
    height: 800px;
    flex-direction: column;
  }
`;

const DescriptionContainer = styled.div`
  /* display: flex; */
  height: 350px;
  width: 350px;
  background-color: lightblue;
`;
