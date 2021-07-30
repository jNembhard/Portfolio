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
            <PContainer>
              <p>
                Hello! I’m Jason and I enjoy designing things that live on the
                web. My interest in web development first began last year while
                working on my capstone project at George Mason University. I had
                been tasked with designing a layout for an Urban Air Mobility
                (UAM) for passengers to purchase tickets and also design data
                visualizations useful for comparing common forms of travel to
                new UAM technology hosted online.
              </p>
              <p>
                Fast forward to today, web development has been an exciting
                mixture of diving into new projects to pick up new skills and
                utilizing new technologies.
              </p>
            </PContainer>
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
  padding-bottom: 120px;

  @media (max-width: 1143px) {
    display: flex;
    flex-direction: column;
    padding-bottom: 200px;
    align-items: center;
    justify-content: center;
  }
`;
const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  > h2 {
    font-size: 60px;
  }
  @media (max-width: 1143px) {
    > h2 {
      font-size: 55px;
    }
  }
`;

const HeaderContainer = styled.div`
  @media (max-width: 1143px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const MainSKillsWrap = styled.div`
  padding-top: 30px;
  background-color: PeachPuff;
  flex: 8;

  @media (max-width: 1143px) {
    border-radius: 20px;
  }

  @media (max-width: 738px) {
    border-top-left-radius: 0px 0px;
    border-top-right-radius: 0px 0px;
    border-bottom-left-radius: 20px 20px;
    border-bottom-right-radius: 20px 20px;
  }
`;

const DescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media (max-width: 1143px) {
    height: 700px;
    flex-direction: column;
  }
`;

const PContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;
const DescriptionContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: SkyBlue;
  margin-left: 10px;
  border-radius: 50px;

  @media (max-width: 1190px) {
    height: 645px;
  }

  @media (max-width: 1143px) {
    width: 450px;
    height: 500px;
    margin-left: 0;

    border-bottom-left-radius: 0px 0px;
    border-bottom-right-radius: 0px 0px;
  }
`;
