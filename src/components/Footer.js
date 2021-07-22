import React from "react";
// import SocialMediaButtons from "react-social-media-buttons";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import styled from "styled-components";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <FooterWrapper>
      <Middle>
        <MDBBtnOne
          size="lg"
          floating
          style={{ backgroundColor: "#0082ca" }}
          href="https://www.linkedin.com/in/jasonnembhard1/"
        >
          <MDBIcon fab icon="linkedin-in" />
        </MDBBtnOne>
        <MDBBtnTwo
          size="lg"
          floating
          style={{ backgroundColor: "#333333" }}
          href="https://github.com/jNembhard"
        >
          <MDBIcon fab icon="github" />
        </MDBBtnTwo>
      </Middle>
      <End>Copyright © {date} Jason Nembhard</End>
    </FooterWrapper>
  );
}

export default Footer;

const FooterWrapper = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
  top: 0;
  background-color: lightblue;
  margin-top: 30px;
  /* padding-top: 30px; */
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Middle = styled.div`
  display: flex;
  /* margin-left: 20px; */
  position: absolute;
  flex: 0.5;
  z-index: 100;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 10px;
`;

const MDBBtnOne = styled(MDBBtn)`
  display: flex;
`;

const MDBBtnTwo = styled(MDBBtn)`
  margin-left: 15px;
`;

const End = styled.div`
  display: flex;
  padding-top: 80px;
`;
