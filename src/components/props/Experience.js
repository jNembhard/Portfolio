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
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
} from "mdb-react-ui-kit";

function Experience(props) {
  return (
    <MDBCarousel showControls showIndicators dark fade>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={props.number}>
          <MDBCard background="dark" className="text-white">
            <MDBCardImage overlay src={props.image} alt="Experience" />
            <MDBCardOverlay>
              <MDBCardTitle>{props.title}</MDBCardTitle>
              <MDBCardText>{props.subtitle}</MDBCardText>
              <MDBCardText>{props.date}</MDBCardText>
              <MDBCardText>{props.achievements}</MDBCardText>
            </MDBCardOverlay>
          </MDBCard>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
  );
}

export default Experience;

const MDBCarouselCaptions = styled(MDBCarouselCaption)`
  top: 0;
`;
