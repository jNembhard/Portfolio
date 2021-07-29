import React from "react";
import { MDBCard, MDBCardBody, MDBIcon, MDBCardTitle } from "mdb-react-ui-kit";
import styled from "styled-components";

export default function Skills(props) {
  return (
    <MDBCardS>
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
          <MDBCardTitle>{props.main}</MDBCardTitle>
        </TitleWrap>
      </MDBCardBodyS>
    </MDBCardS>
  );
}

const MDBCardBodyS = styled(MDBCardBody)`
  display: flex;
  align-items: center;
`;

const TitleWrap = styled.div`
  display: flex;
  margin-top: 5px;
  margin-left: 10px;
  font-weight: 200;
`;

const Image = styled.img`
  width: 48px;
  height: 48px;
`;

const MDBCardS = styled(MDBCard)`
  margin-bottom: 10px;
  margin-right: 10px;
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;
