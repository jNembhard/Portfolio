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
      <MDBCardImage
        src={props.image}
        position="top"
        alt={props.alt}
        width="400px"
        height="220px"
      />
      <MDBCardBody>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>{props.description}</MDBCardText>
        <ButtonWrap>
          {props.website && <MDBBtnOne href={props.website}>Website</MDBBtnOne>}
          <MDBBtnTwo style={{ backgroundColor: "#333333" }} href={props.source}>
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

const MDBCardS = styled(MDBCard)`
  width: 98%;
  height: 98%;
  margin-bottom: 25px;
  transition: all 0.5s ease-in-out;

  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }

  &:hover {
    transform: scale(1.08);
  }
`;
