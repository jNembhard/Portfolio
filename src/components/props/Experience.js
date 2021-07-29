import React from "react";
import styled from "styled-components";

import {
  MDBCard,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Experience(props) {
  return (
    <MDBCard background="dark" className="text-white">
      <MDBCardImages overlay src={props.image} alt="Experience" />
      <MDBCardOverlay>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <div>
          <MDBCardSubTitles>{props.subtitle}</MDBCardSubTitles>
          <MDBCardSubTitles>{props.date}</MDBCardSubTitles>
        </div>
        <MDBCardTexts>{props.achievements}</MDBCardTexts>
      </MDBCardOverlay>
    </MDBCard>
  );
}

export default Experience;

const MDBCardSubTitles = styled(MDBCardSubTitle)`
  display: flex;
  margin-bottom: 5px;
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const MDBCardTexts = styled(MDBCardText)`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const MDBCardImages = styled(MDBCardImage)`
  width: 100%;
  height: 600px;
`;
