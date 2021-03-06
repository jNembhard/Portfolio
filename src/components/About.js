import React from "react";
import MainSkills from "./MainSkills";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function About() {
  return (
    <AboutWrap>
      <HeaderContainer>
        <DescriptionWrap>
          <Fade left>
            <DescriptionContainer>
              <Fade bottom delay={1050}>
                <AboutTitle id="about">
                  <h2>About Me</h2>
                </AboutTitle>
                <PContainer>
                  <p>
                    Hello! I’m Jason and I enjoy designing things for the web.
                    My interest in web development first began over a year ago
                    while working on an Urban Air Mobility (UAM) project
                    sponsored by MITRE while attending George Mason Univeristy.
                  </p>
                  <p>
                    My main focuses were to design an app layout for passengers
                    to view and purchase tickets to ride Urban Air Mobility
                    (UAM) vehicles and create data visualizations hosted online
                    proving that UAM is a faster way to travel when compared to
                    cars and trains.
                  </p>
                  <p>
                    Fast forward to today, web development has been an exciting
                    mixture of diving into projects to pick up new skills and
                    utilizing new technologies.
                  </p>
                </PContainer>
              </Fade>
            </DescriptionContainer>
          </Fade>
          <Fade right>
            <MainSKillsWrap>
              <MainSkills />
            </MainSKillsWrap>
          </Fade>
        </DescriptionWrap>
      </HeaderContainer>
    </AboutWrap>
  );
}

export default About;

const AboutWrap = styled.div`
  padding-top: 250px;
  padding-bottom: 120px;

  @media (min-width: 800px) and (max-width: 900px) and (orientation: landscape) {
    padding-top: 300px;
    margin-top: 0;
  }

  @media (min-width: 600px) and (max-width: 750px) and (orientation: landscape) {
    padding-top: 600px;
  }

  @media (max-width: 1143px) {
    padding-bottom: 240px;
  }

  @media (max-width: 414px) {
    padding-top: 500px;
  }
`;

const AboutTitle = styled.div`
  display: flex;
  justify-content: center;
  color: #111;
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
  background-color: #f59b42;
  flex: 8;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;

  @media (max-width: 1300px) {
    margin-right: 188px;
  }

  @media (max-width: 1143px) {
    margin-right: 0;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    width: 450px;
  }

  @media (max-width: 414px) {
    width: 370px;
    margin-bottom: 200px;
  }
`;

const DescriptionWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;

  @media (max-width: 1300px) {
    margin-left: 200px;
  }

  @media (max-width: 1143px) {
    height: 700px;
    flex-direction: column;
    margin-top: 150px;
    margin-left: inherit;
  }

  @media (max-width: 768px) {
    margin-top: inherit;
  }
`;

const PContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  color: #111;

  > p {
    font-size: 17px;
  }

  @media (max-width: 414px) {
    marign-right: 40px;
    margin-left: 40px;
  }
`;
const DescriptionContainer = styled.div`
  height: 500px;
  width: 500px;
  background-color: SkyBlue;
  background-color: #3185fc;
  margin-left: 10px;
  border-radius: 50px;

  @media (max-width: 1206px) {
    height: 640px;
  }

  @media (max-width: 1143px) {
    width: 450px;
    height: 500px;
    margin-left: 0;
    border-bottom-left-radius: 0px 0px;
    border-bottom-right-radius: 0px 0px;
  }

  @media (max-width: 414px) {
    width: 370px;
    height: 600px;
  }
`;
