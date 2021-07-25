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
`;

const TitleWrap = styled.div`
  display: flex;
  margin-top: 12px;
  margin-left: 10px;
  font: bold;
`;

const Image = styled.img`
  width: 40px;
  height: 40px;
`;

const MDBCardS = styled(MDBCard)`
  display: flex;
  margin-bottom: 10px;
`;
