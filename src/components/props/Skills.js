import React from "react";
import { MDBCard, MDBCardBody, MDBIcon, MDBCardTitle } from "mdb-react-ui-kit";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

export default function Skills(props) {
  return (
    <MDBCardS>
      <Fade bottom delay={1250}>
        <MDBCardBodyS>
          {props.image ? (
            <Image src={props.image} alt="icon images" />
          ) : (
            <MDBIcon
              fab
              icon={props.icon}
              size="3x"
              style={{ color: props.color }}
            />
          )}
          <TitleWrap>
            <MDBCardTitle className="font-size">{props.main}</MDBCardTitle>
          </TitleWrap>
        </MDBCardBodyS>
      </Fade>
    </MDBCardS>
  );
}

const MDBCardBodyS = styled(MDBCardBody)`
  display: flex;
  align-items: center;

  @media (max-width: 1300px) {
    display: inherit;
    text-align: center;
  }

  @media (max-width: 1143px) {
    display: flex;
    text-align: inherit;
  }

  @media (max-width: 414px) {
    width: 175px;
    height: 100px;
  }
`;

const TitleWrap = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 10px;
  font-weight: 200;

  @media (max-width: 414px) {
    margin-left: 9px;
    & .font-size {
      font-size: 18px;
    }
  }

  @media (max-width: 376px) {
    & .font-size {
      font-size: 14px;
    }
  }
`;

const Image = styled.img`
  width: 48px;
  height: 48px;

  @media (max-width: 414px) {
    width: 40px;
    height: 40px;
  }
`;

const MDBCardS = styled(MDBCard)`
  margin-bottom: 10px;
  margin-right: 10px;

  @media (max-width: 1300px) {
    width: 140px;
    height: 120px;
    align-items: center;
  }

  @media (max-width: 1143px) {
    width: inherit;
    height: inherit;
    align-items: inherit;
  }

  @media (max-width: 414px) {
    margin-right: 1px;
    left: -3.5px;
  }

  @media (max-width: 376px) {
    width: 150px;
  }
`;
