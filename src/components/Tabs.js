import React, { useState } from "react";
import styled from "styled-components";
import skillsDatasets from "./data/skillsDatasets";
import Skills from "./props/Skills";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

function Tabs() {
  return (
    <>
      <MDBRow>
        <MDBCol>
          <RowWrap>
            {/* <RowDouble> */}
            <Row>
              {skillsDatasets.slice(0, 3).map((skillsDataset) => (
                <Skills
                  key={skillsDataset.id}
                  icon={skillsDataset.icon}
                  color={skillsDataset.color}
                  image={skillsDataset.image}
                  main={skillsDataset.main}
                />
              ))}
            </Row>
            <Row></Row>
            {/* </RowDouble> */}
            <Row></Row>
          </RowWrap>
        </MDBCol>
      </MDBRow>
    </>
  );
}

export default Tabs;

const RowDouble = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

const RowWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* object-fit: contain; */
`;

const Row = styled.div`
  margin-right: 5px;
  margin-left: 5px;

  @media (max-width: 768px) {
    object-fit: contain;
  }
`;
