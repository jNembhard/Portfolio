import React, { useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import styled from "styled-components";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import experienceDatasets from "./data/experienceDatasets";
import Experience from "./props/Experience";

export default function Tabs() {
  const [basicActive, setBasicActive] = useState("tab1");
  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }
    setVerticalActive(value);
  };

  return (
    <>
      <MDBRow className="mb-3">
        <MDBCol size="3">
          <MDBTabs className="flex-column text-center">
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                Main Skills
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
              >
                Experience
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab3")}
                active={verticalActive === "tab3"}
              >
                Education
              </MDBTabsLink>
            </MDBTabsItem>
            {/* <MDBBtns size="lg" tag="a">
              Resume
              <MDBIcons fas icon="download" />
            </MDBBtns> */}
          </MDBTabs>
        </MDBCol>
        <MDBCol size="9">
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === "tab1"}></MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab2"}>
              {/* <Experience /> */}
              {experienceDatasets.map((experienceDataset) => (
                <Experience
                  key={experienceDataset.id}
                  number={experienceDataset.number}
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
            </MDBTabsPane>

            <MDBTabsPane show={verticalActive === "tab3"}>
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
        </MDBCol>
      </MDBRow>
    </>
  );
}

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
