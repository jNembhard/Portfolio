import React from "react";
import styled from "styled-components";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardImage,
  MDBIcon,
} from "mdb-react-ui-kit";

function Card(props) {
  return (
    <MDBCardS style={{ maxWidth: "22rem" }}>
      <a target="_blank" href={props.website} rel="noopener noreferrer">
        <MDBCardImageGrow
          src={props.image}
          position="top"
          alt={props.alt}
          width="400px"
          height="220px"
        />
      </a>
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>{props.description}</MDBCardText>
        <ButtonWrap>
          {props.website && (
            <MDBBtnOne
              target="_blank"
              href={props.website}
              rel="noopener noreferrer"
            >
              Website
            </MDBBtnOne>
          )}
          <MDBBtnTwo
            style={{ backgroundColor: "#333333" }}
            target="_blank"
            href={props.source}
            rel="noopener noreferrer"
          >
            <MDBIconS fab icon="github" />
            Github
          </MDBBtnTwo>
        </ButtonWrap>
      </MDBCardBody>
    </MDBCardS>
  );
}

export default Card;

const MDBBtnOne = styled(MDBBtn)`
  position: absolute;
  bottom: 20px;
`;
const MDBBtnTwo = styled(MDBBtnOne)`
  position: absolute;
  right: 23px;
`;

const ButtonWrap = styled.div`
  padding-top: 20px;
`;

const MDBIconS = styled(MDBIcon)`
  padding-right: 5px;
`;

const MDBCardImageGrow = styled(MDBCardImage)`
  display: block;
  width: 100%;
  height: auto;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.08);
  }
`;

const MDBCardS = styled(MDBCard)`
  width: 98%;
  height: 98%;
  margin-bottom: 25px;
  position: relative;
  overflow: hidden;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;
