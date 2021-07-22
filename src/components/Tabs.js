import React, { useState } from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  //   MDBCarouselElement,
  //   MDBCarouselCaption,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBCard,
  //   MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardOverlay,
  MDBCardImage,
  //   MDBCardLink,
} from "mdb-react-ui-kit";
import styled from "styled-components";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

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
      <MDBTabs className="mb-3">
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
        <MDBBtns size="lg" tag="a">
          Resume
          <MDBIcons fas icon="download" />
        </MDBBtns>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "tab1"}></MDBTabsPane>
        <MDBTabsPane show={basicActive === "tab2"}>
          <CardWrapper>
            <MDBCarousel showControls dark fade>
              <MDBCarouselInner>
                <MDBCarouselItem itemId={0}>
                  <FirstWrap>
                    <MDBCard
                      background="dark"
                      className="text-white"
                      style={{ height: "5rem", width: "55rem" }}
                    >
                      {/* <MDBCardBody> */}
                      <MDBCardImage
                        overlay
                        src={
                          process.env.PUBLIC_URL +
                          "images/carousel/unsplash.jpg"
                        }
                        alt="coding setup"
                      />
                      <MDBCardOverlay>
                        <MDBCardTitle>Personal Projects</MDBCardTitle>
                        <MDBCardSubTitles>
                          {/* <H6>BS, Systems Engineering</H6> */}
                          <h6>August 2020 - Present</h6>
                        </MDBCardSubTitles>
                        <MDBCardText>
                          <ul>
                            <li>
                              Designed a Netflix-style web app which pulls movie
                              posters and trailers from an API displayed back to
                              users.
                            </li>
                            <li>
                              Successfully generated a Tesla front page built in
                              React and deployed Firebase which snaps to section
                              on scroll.
                            </li>
                            <li>
                              Created Leaf Note, a MERN style web app built in
                              React which takes notes and saves them to an Atlas
                              cluster.
                            </li>
                            <li>
                              Developed an Authentication app (Whisper Mockup)
                              allowing users to anonymously sign in and submit
                              secrets.
                            </li>
                            <li>
                              Launched an advertisement for the dog dating app
                              Fetchbone.
                            </li>
                            <li>
                              Produced Quizzler, a True or False trivia app
                              built in PyCharm, that gets questions from the
                              opentdb.com API.
                            </li>
                            <li>
                              Developed an International Space Station (ISS)
                              tracker on Python Anywhere which updates every 60
                              seconds sends an email to a user if ISS is above
                              the user’s specified latitude and longitude
                              location at night.
                            </li>
                          </ul>
                        </MDBCardText>
                      </MDBCardOverlay>
                      {/* </MDBCardBody> */}
                    </MDBCard>
                  </FirstWrap>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={1}>
                  <SecondWrap>
                    <MDBCard
                      background="dark"
                      className="text-white"
                      style={{ width: "55rem" }}
                    >
                      {/* <MDBCardBody> */}
                      <MDBCardImage
                        overlay
                        src={
                          process.env.PUBLIC_URL +
                          "images/carousel/light_bulb.jpg"
                        }
                        alt="light bulb"
                      />
                      <MDBCardOverlay>
                        <MDBCardTitle>AlNembCo Services LLC</MDBCardTitle>
                        <MDBCardSubTitles>
                          <H6>Electrician Associate</H6>
                          <h6>June 2012 - Present</h6>
                        </MDBCardSubTitles>
                        <MDBCardText>
                          <ul>
                            <li>
                              Installed, maintained, repaired, and tested
                              equipment for the generation and utilization of
                              electric energy for diverse industry clients.
                            </li>
                            <li>
                              Interpreted blueprints, schematics, and diagrams
                              used for mapping electrical power to households
                              and commercial buildings in Northern Virginia,
                              Maryland, and Washington D.C.
                            </li>
                            <li>
                              Cultivated excellent relationships with clients,
                              resulting in a strong base of referral business
                              through listserv.
                            </li>
                            <li>
                              Maintained customer records and managed
                              bookkeeping of expenditures using QuickBooks.
                            </li>
                          </ul>
                        </MDBCardText>
                      </MDBCardOverlay>
                    </MDBCard>
                  </SecondWrap>
                </MDBCarouselItem>

                <MDBCarouselItem itemId={2}>
                  <ThirdWrap>
                    <MDBCard
                      background="dark"
                      className="text-white"
                      style={{ width: "63rem" }}
                    >
                      {/* <MDBCardBody> */}
                      <MDBCardImage
                        overlay
                        src={
                          process.env.PUBLIC_URL +
                          " images/carousel/uam_vehicle.jpg"
                        }
                        alt="uam vehicle"
                      />
                      <MDBCardOverlay>
                        <MDBCardTitle>
                          George Mason University (GMU)
                        </MDBCardTitle>
                        <MDBCardSubTitle>
                          <H6>
                            Rapid Reliable Urban Mobility System (RRUMS) Team
                            Member
                          </H6>
                          <h6>August 2019 - May 2020</h6>
                        </MDBCardSubTitle>
                        <MDBCardText>
                          <ul>
                            <li>
                              <li>
                                Capstone project developed with the goal of
                                reducing the travel Planning Time Index (PTI)
                                from 1.6 to 1.
                                <ul>
                                  <li>
                                    Urban Air Mobility (UAM) simulation model
                                    built in Java comprised of 5 UAM
                                    destinations and 13 flight paths between
                                    airport and business districts in the
                                    Washington, D.C. area.
                                  </li>
                                </ul>
                              </li>
                            </li>
                            <li>
                              Composed Business Case proposing 20% faster
                              transportation with 97.9% reliability through the
                              D.C. area.
                              <ul>
                                <li>
                                  Detailed 10% penetration rate of high-value
                                  market with an anticipated 10-year profit
                                  forecast of $195.6M, and a 2-year breakeven
                                  point with an estimated 122.26% ROI at $200
                                  per passenger ticket.
                                </li>
                              </ul>
                            </li>
                            <li>
                              Designed mobile app layout in Adobe XD enabling
                              passengers to purchase tickets, and view boarding,
                              departure, and arrival information for expected
                              UAM vehicles.
                            </li>
                            <li>
                              Developed webpage visualizations in RStudio with
                              RShiny to generate RRUMS transportation logistics
                              output data at each arrival and departure location
                              for up to a 24-day period.
                            </li>
                            <li>
                              Defined Context, Stakeholder, and Enterprise
                              Analyses.
                              <ul>
                                <li>
                                  Used to set the stage for RRUMS development
                                  and define interactions between industry
                                  clients and the surrounding environment.
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </MDBCardText>
                      </MDBCardOverlay>
                    </MDBCard>
                  </ThirdWrap>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </CardWrapper>
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
    </>
  );
}

const CardWrapper = styled.div`
  display: block;
  width: 100vw;
  height: 100vh;
`;
const MDBCardSubTitles = styled(MDBCardSubTitle)`
  display: flex;
  margin-bottom: 5px;
`;

const H6 = styled.h6`
  flex: 0.97; ;
`;

const MDBIcons = styled(MDBIcon)`
  margin-left: 5px; ;
`;

const MDBBtns = styled(MDBBtn)`
  margin-left: 20px;
`;

const FirstWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SecondWrap = styled(FirstWrap)``;

const ThirdWrap = styled(FirstWrap)`
  object-fit: contain;
`;

// const MDBCards = styled(MDBCard)`
//   height: 60px;
// `;
