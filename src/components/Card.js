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
    <MDBCard style={{ maxWidth: "22rem" }}>
      <MDBCardImage src={props.image} position="top" alt="Portfolio Images" />
      <MDBCardBodyS>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <MDBCardText>{props.description}</MDBCardText>
        <ButtonWrap>
          <MDBBtnOne href={props.website}>Website</MDBBtnOne>
          <MDBBtnTwo style={{ backgroundColor: "#333333" }} href={props.source}>
            <MDBIconS fab icon="github" />
            Github
          </MDBBtnTwo>
        </ButtonWrap>
      </MDBCardBodyS>
    </MDBCard>
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
const MDBCardBodyS = styled(MDBCardBody)`
  /* position: relative; */
  /* @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  } */
`;
