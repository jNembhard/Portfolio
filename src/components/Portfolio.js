import React from "react";
import styled from "styled-components";
import Card from "./props/Card";
import portfolioItems from "./data/portfolioItems";
// import skills from "./data/skillsDatasets";
// import Skills from "./props/Skills";

function Portfolio() {
  return (
    <PortfolioWrapper id="portfolio">
      <PortfolioHeading>Portfolio</PortfolioHeading>
      <RowWrap>
        <Row>
          {/* {skills.map((skill) => (
            <Skills
              key={skill.id}
              icon={skill.icon}
              color={skill.color}
              main={skill.main}
            />
          ))} */}
        </Row>
        <Row>
          {portfolioItems.slice(3, 6).map((portfolioItem) => (
            <Card
              key={portfolioItem.id}
              image={portfolioItem.image}
              title={portfolioItem.title}
              description={portfolioItem.description}
              website={portfolioItem.website}
              source={portfolioItem.source}
            />
          ))}
        </Row>
        <Row>
          {portfolioItems.slice(-2).map((portfolioItem) => (
            <Cards
              key={portfolioItem.id}
              image={portfolioItem.image}
              title={portfolioItem.title}
              description={portfolioItem.description}
              website={portfolioItem.website}
              source={portfolioItem.source}
            />
          ))}
        </Row>
      </RowWrap>
    </PortfolioWrapper>
  );
}

export default Portfolio;

const PortfolioWrapper = styled.div`
  max-width: 100vw;
  padding-bottom: 120px;
  @media (max-width: 768px) {
    display: block;
    display: inline-block;
  }
`;

const PortfolioHeading = styled.h2`
  font-size: 60px;
  display: flex;
  justify-content: center;
`;

const RowWrap = styled.div`
  padding-top: 20px;
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
  margin-left: 30px;
  margin-right: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Cards = styled(Card)`
  /* display: flex; */
  /* justify-content: space-around; */
`;
