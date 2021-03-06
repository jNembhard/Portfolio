import React from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import styled from "styled-components";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div>
      <FooterContainer>
        <Middle>
          <BtnWrapOne>
            <MDBBtnOne
              color="none"
              className="m-1"
              style={{ color: "#0082ca" }}
              href="https://www.linkedin.com/in/jasonnembhard1/"
              aria-label="linkedin"
            >
              <MDBIcon fab icon="linkedin-in" size="2x" alt="LinkedIn" />
            </MDBBtnOne>
          </BtnWrapOne>
          <MDBBtnTwo
            tag="a"
            color="none"
            className="m-1"
            style={{ color: "#EEEADE" }}
            href="https://github.com/jNembhard"
            aria-label="github"
          >
            <MDBIcon fab icon="github" size="2x" alt="GitHub" />
          </MDBBtnTwo>
        </Middle>
        <End>Copyright © {date} Jason Nembhard</End>
      </FooterContainer>
    </div>
  );
}

export default Footer;

const FooterContainer = styled.div`
  height: 110px;
  display: flex;
  flex-direction: column;
  top: 0;
  background-color: #403f4c;
  margin-top: 30px;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const BtnWrapOne = styled.div`
  padding-right: 10px;
`;

const Middle = styled.div`
  display: flex;
  position: absolute;
  flex: 0.5;
  z-index: 100;
  align-items: center;
  margin-bottom: 20px;
  padding-top: 10px;
`;

const MDBBtnOne = styled(MDBBtn)`
  display: flex;
  text-decoration: none;
`;

const MDBBtnTwo = styled(MDBBtn)`
  margin-left: 15px;
`;

const End = styled.div`
  display: flex;
  padding-top: 80px;
  color: #ffffff;
`;
