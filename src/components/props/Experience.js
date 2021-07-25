import React, { useState } from "react";
import styled from "styled-components";

import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
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
      {/* <MDBCarouselElement
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.jpg"
        alt="..."
      /> */}
      <MDBCardOverlay>
        <MDBCardTitle>{props.title}</MDBCardTitle>
        <SubTitleWrap>
          <MDBCardSubTitles>{props.subtitle}</MDBCardSubTitles>
          <MDBCardSubTitles>{props.date}</MDBCardSubTitles>
        </SubTitleWrap>
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

const SubTitleWrap = styled.div`
  /* display: flex; */
  /* justify-content: space-between; */
`;

const MDBCardTexts = styled(MDBCardText)`
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const MDBCardImages = styled(MDBCardImage)`
  width: 100%;
  height: 600px;
  /* object-fit: contain; */
`;
