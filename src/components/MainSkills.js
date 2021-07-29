import React from "react";
import styled from "styled-components";
import skillsDatasets from "./data/skillsDatasets";
import Skills from "./props/Skills";

function MainSkills() {
  return (
    <>
      <RowWrap>
        <FirstContainer>
          <Row>
            {skillsDatasets.slice(0, 5).map((skillsDataset) => (
              <Skills
                className="spacing"
                key={skillsDataset.id}
                icon={skillsDataset.icon}
                color={skillsDataset.color}
                image={skillsDataset.image}
                main={skillsDataset.main}
              />
            ))}
          </Row>
        </FirstContainer>

        <SecondContainer>
          <Row>
            {skillsDatasets.slice(5, 9).map((skillsDataset) => (
              <Skills
                key={skillsDataset.id}
                icon={skillsDataset.icon}
                color={skillsDataset.color}
                image={skillsDataset.image}
                main={skillsDataset.main}
              />
            ))}
          </Row>
        </SecondContainer>
      </RowWrap>
    </>
  );
}

export default MainSkills;

const RowWrap = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: center;

  padding: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const FirstContainer = styled.div`
  flex-direction: row;
  @media (max-width: 768px) {
    margin-left: 20px;
  }
`;
const SecondContainer = styled.div`
  @media (max-width: 768px) {
    margin-right: 20px;
  }
`;
