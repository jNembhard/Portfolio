import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
} from "mdb-react-ui-kit";
import styled from "styled-components";
import experienceDatasets from "./data/experienceDatasets";
import Experience from "./props/Experience";
import Skills from "./props/Skills";
import skillsDatasets from "./data/skillsDatasets";

export default function Tabs() {
  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }
    setBasicActive(value);
  };

  return (
    <>
      <MDBRow>
        <MDBCol>
          <TabWrap>
            <MDBTabs className="text-center">
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab1")}
                  active={basicActive === "tab1"}
                >
                  Main Skills
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab2")}
                  active={basicActive === "tab2"}
                >
                  Experience
                </MDBTabsLink>
              </MDBTabsItem>
              <MDBTabsItem>
                <MDBTabsLink
                  onClick={() => handleBasicClick("tab3")}
                  active={basicActive === "tab3"}
                >
                  Education
                </MDBTabsLink>
              </MDBTabsItem>
            </MDBTabs>
          </TabWrap>
          <TabWrap>
            <MDBTabsContent>
              <MDBTabsPane show={basicActive === "tab1"}>
                <RowWrap>
                  <RowDouble>
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
                    <Row>
                      {skillsDatasets.slice(3, 6).map((skillsDataset) => (
                        <Skills
                          key={skillsDataset.id}
                          icon={skillsDataset.icon}
                          color={skillsDataset.color}
                          image={skillsDataset.image}
                          main={skillsDataset.main}
                        />
                      ))}
                    </Row>
                  </RowDouble>
                  <Row>
                    {skillsDatasets.slice(6, 9).map((skillsDataset) => (
                      <Skills
                        key={skillsDataset.id}
                        icon={skillsDataset.icon}
                        color={skillsDataset.color}
                        image={skillsDataset.image}
                        main={skillsDataset.main}
                      />
                    ))}
                  </Row>
                </RowWrap>
              </MDBTabsPane>
              <MDBTabsPane show={basicActive === "tab2"}>
                {/* <Experience /> */}

                <MDBCarousel showControls showIndicators fade>
                  <MDBCarouselInner>
                    <CardWrapper>
                      <MDBCarouselItem itemId={0}>
                        {experienceDatasets
                          .slice(0, 1)
                          .map((experienceDataset) => (
                            <Experience
                              key={experienceDataset.id}
                              image={experienceDataset.image}
                              title={experienceDataset.title}
                              date={experienceDataset.date}
                              subtitle={experienceDataset.subtitle}
                              achievements={experienceDataset.achievements.map(
                                (achievement) => (
                                  <li key={achievement}>{achievement.item}</li>
                                )
                              )}
                            />
                          ))}
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId={1}>
                        {experienceDatasets
                          .slice(1, 2)
                          .map((experienceDataset) => (
                            <Experience
                              key={experienceDataset.id}
                              image={experienceDataset.image}
                              title={experienceDataset.title}
                              date={experienceDataset.date}
                              subtitle={experienceDataset.subtitle}
                              achievements={experienceDataset.achievements.map(
                                (achievement) => (
                                  <li key={achievement}>{achievement.item}</li>
                                )
                              )}
                            />
                          ))}
                      </MDBCarouselItem>
                      <MDBCarouselItem itemId={2}>
                        {experienceDatasets
                          .slice(2, 3)
                          .map((experienceDataset) => (
                            <Experience
                              key={experienceDataset.id}
                              // image={experienceDataset.image}
                              title={experienceDataset.title}
                              date={experienceDataset.date}
                              subtitle={experienceDataset.subtitle}
                              achievements={experienceDataset.achievements.map(
                                (achievement) => (
                                  <li key={achievement}>{achievement.item}</li>
                                )
                              )}
                            />
                          ))}
                      </MDBCarouselItem>
                    </CardWrapper>
                  </MDBCarouselInner>
                </MDBCarousel>
              </MDBTabsPane>

              <MDBTabsPane show={basicActive === "tab3"}>
                <h4>George Mason University</h4>
                <h6>BS, Systems Engineering</h6>
                <h6>August, 2020</h6>
                <ul>
                  <li>Cumulative GPA: 3.12/4.0; Major GPA: 3.4/4.0;</li>
                  <li>
                    1st place winner of the 2020 Andrew P. Sage Capstone Design
                    Competition transportation and logistics track.
                  </li>
                </ul>
              </MDBTabsPane>
            </MDBTabsContent>
          </TabWrap>
        </MDBCol>
      </MDBRow>
    </>
  );
}

const CardWrapper = styled.div`
  display: flex;
  max-width: 90vw;
  /* height: 80vh; */
`;

const TabWrap = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`;

const RowDouble = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: block;
  }
`;

const RowWrap = styled.div`
  display: flex;
  object-fit: contain;
`;

const Row = styled.div`
  margin-right: 5px;
  margin-left: 5px;
  @media (max-width: 768px) {
    object-fit: contain;
  }
`;
