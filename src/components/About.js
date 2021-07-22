import React from "react";
import Tabs from "./Tabs";
import styled from "styled-components";

function About() {
  return (
    <AboutWrap>
      <HeaderContainer>
        <ATitle>
          <h1>About Me (Update with Amazon and Styling)</h1>
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
  padding-top: 100px;
`;
const ATitle = styled.div``;
const AInfo = styled.div``;
const HeaderContainer = styled.div`
  flex: 1;
  position: relative;
`;

const ATabs = styled.div`
  padding-top: 30px;
`;
