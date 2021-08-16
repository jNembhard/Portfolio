import React, { useState } from "react";
import styled from "styled-components";
import Card from "./props/Card";
import portfolioItems from "./data/portfolioItems";
import { MDBBtn, MDBCollapse } from "mdb-react-ui-kit";
import Fade from "react-reveal/Fade";

function Portfolio() {
  const [showContent, setShowContent] = useState(false);
  const toggleShow = () => setShowContent(!showContent);

  return (
    <PortfolioWrapper id="portfolio">
      <Fade>
        <PortfolioHeading>Portfolio</PortfolioHeading>
      </Fade>
      <RowWrap>
        <Row>
          {portfolioItems.slice(0, 3).map((portfolioItem) => (
            <Fade bottom>
              <Card
                key={portfolioItem.id}
                image={portfolioItem.image}
                title={portfolioItem.title}
                alt={portfolioItem.alt}
                description={portfolioItem.description}
                website={portfolioItem.website}
                source={portfolioItem.source}
              />
            </Fade>
          ))}
        </Row>

        <MDBCollapse show={showContent}>
          <Row2>
            {portfolioItems.slice(3, 7).map((portfolioItem) => (
              <Fade bottom when={showContent}>
                <Card
                  key={portfolioItem.id}
                  image={portfolioItem.image}
                  title={portfolioItem.title}
                  alt={portfolioItem.alt}
                  description={portfolioItem.description}
                  website={portfolioItem.website}
                  source={portfolioItem.source}
                />
              </Fade>
            ))}
          </Row2>
        </MDBCollapse>

        <Fade>
          <CollapseContainer>
            <MDBBtns outline color="dark" onClick={toggleShow}>
              Show {showContent ? "Less" : "More"}
            </MDBBtns>
          </CollapseContainer>
        </Fade>
      </RowWrap>
    </PortfolioWrapper>
  );
}

export default Portfolio;

const PortfolioWrapper = styled.div`
  max-width: 100vw;
  padding-bottom: 120px;

  @media only screen and (max-width: 896px) and (orientation: landscape) {
    width: 1000px;
  }

  @media (max-width: 768px) {
    padding-bottom: 60px;
  }
`;

const PortfolioHeading = styled.h2`
  font-size: 60px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 55px;
  }
`;

const RowWrap = styled.div`
  padding-top: 20px;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 30px;
  margin-right: 30px;
  @media (max-width: 1043px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Row2 = styled(Row)`
  margin-left: 0;
  margin-right: 0;
`;

const CollapseContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MDBBtns = styled(MDBBtn)`
  &:hover {
    color: gold;
    background-color: #262626;
  }
`;
