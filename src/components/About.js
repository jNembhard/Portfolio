import React from "react";
import MainSkills from "./MainSkills";
import styled from "styled-components";

function About() {
  return (
    <AboutWrap>
      <HeaderContainer>
        <DescriptionWrap>
          <DescriptionContainer>
            <AboutTitle id="about">
              <h2>About Me</h2>
            </AboutTitle>
            <PContainer>
              <p>
                Hello! I’m Jason and I enjoy designing things that live on the
                web. My interest in web development first began last year while
                working on my capstone project at George Mason University. My
                main focuses were to design an app layout for passengers to view
                and purchase tickets to ride Urban Air Mobility (UAM) vehicles
                and create data visualizations hosted online proving that UAM is
                a faster way to travel when compared to cars and trains.
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
    object-fit: contain;
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
