import React from "react";
import Tabs from "./Tabs";
import styled from "styled-components";

function About() {
  return (
    <AboutWrap id="about">
      <HeaderContainer>
        <ATitle>
          <h2>About Me (Update with Amazon and Styling)</h2>
        </ATitle>
        <AInfo>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which dont look even slightly believable.
          If you are going to use a passage of Lorem Ipsum,
        </AInfo>
        <ATabs>
          <Tabs />
        </ATabs>
      </HeaderContainer>
    </AboutWrap>
  );
}

export default About;

const AboutWrap = styled.div`
  background-color: white;
  display: flex;
  padding-bottom: 120px;

  @media (max-width: 768px) {
    padding-bottom: 110px;
  }
`;
const ATitle = styled.div`
  > h2 {
    font-size: 60px;
  }
`;
const AInfo = styled.div``;
const HeaderContainer = styled.div`
  flex: 1;
  position: relative;
`;

const ATabs = styled.div`
  padding-top: 30px;
`;
