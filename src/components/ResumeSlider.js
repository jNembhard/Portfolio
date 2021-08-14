import React from "react";
import Carousel, { CarouselItem } from "./props/Carousel";
import styled from "styled-components";

function ResumeSlider() {
  return (
    <div>
      <ResumeHeading id="experience">Experience</ResumeHeading>
      <Carousel>
        <Items>
          <Display>
            <div className="title__wrap--mod-1">
              <h2>Personal Projects</h2>
              <h4>August 2020 - Present</h4>
            </div>
          </Display>
          <Info>
            <ul>
              <li>
                Developed a full stack Amazon e-Commerce clone built with
                Firebase, React Redux, and Stripe’s API.
              </li>
              <li>
                Designed a Netflix-style web app which pulls movie posters and
                trailers from an API displayed back to users.
              </li>
              <li>
                Created podcast landing page built with BEM, HTML5, and Sass.
              </li>

              <li>
                Successfully generated a Tesla front page built in React which
                uses Styled-Components and react redux.
              </li>
              <li>
                Secrets: an app allowing users to authenticate with Google or
                Facebook and submit their secrets anonymously.
                <ul>
                  <li>Built with MongoDB, node.js, and passportJS.</li>
                </ul>
              </li>
              <li>
                Launched an advertisement for the dog dating app Fetchbone.
              </li>
              <li>
                Developed an International Space Station (ISS) tracker on Python
                Anywhere which updates every 60 seconds and sends an email to a
                user if ISS is above the user’s specified latitude and longitude
                location at night.
              </li>
            </ul>
          </Info>
        </Items>
        <Items>
          <Display>
            <div className="title__wrap--mod-2">
              <h2>Electrician Assistant</h2>
              <h3>AlNembCo Services LLC</h3>
              <h4>June 2012 - Present</h4>
            </div>
          </Display>
          <Info>
            <ul>
              <li>
                Installed, maintained, repaired, and tested equipment for the
                generation and utilization of electric energy for diverse
                industry clients.
              </li>
              <li>
                Interpreted blueprints, schematics, and diagrams used for
                mapping electrical power to households and commercial buildings
                in Northern Virginia, Maryland, and Washington D.C.
              </li>
              <li>
                Cultivated excellent relationships with clients, resulting in a
                strong base of referral business through listserv.
              </li>
              <li>
                Maintained customer records and managed bookkeeping of
                expenditures using QuickBooks.
              </li>
            </ul>
          </Info>
        </Items>
        <Items>
          <Display>
            <div className="title__wrap--mod-3">
              <h2>RRUMS Project Member</h2>
              <h3>George Mason University</h3>
              <h4>August 2019 - May 2020</h4>
            </div>
          </Display>
          <Info>
            <div className="ul__mod--3">
              <ul>
                <li>
                  Capstone project developed with the goal of reducing the
                  travel Planning Time Index (PTI) from 1.6 to 1.
                  <ul>
                    <li>
                      Urban Air Mobility (UAM) simulation model built in Java
                      comprised of 5 UAM destinations and 13 flight paths
                      between airport and business districts in the Washington,
                      D.C. area.
                    </li>
                  </ul>
                </li>
                <li>
                  Composed Business Case proposing 20% faster transportation
                  with 97.9% reliability through the D.C. area.
                  <ul>
                    <li>
                      Detailed 10% penetration rate of high-value market with an
                      anticipated 10-year profit forecast of $195.6M, and a
                      2-year breakeven point with an estimated 122.26% ROI at
                      $200 per passenger ticket.
                    </li>
                  </ul>
                </li>
                <li>
                  Designed mobile app layout in Adobe XD enabling passengers to
                  purchase tickets, and view boarding, departure, and arrival
                  information for expected UAM vehicles.
                </li>
                <li>
                  Developed webpage visualizations in RStudio with RShiny to
                  generate RRUMS transportation logistics output data at each
                  arrival and departure location for up to a 24-day period.
                </li>
              </ul>
            </div>
          </Info>
        </Items>
      </Carousel>
    </div>
  );
}

export default ResumeSlider;

const Display = styled.div`
  background-color: #f59b42;
  width: 200px;
  height: 200px;
  z-index: 1;
  color: #2a2a2a;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;

  > div {
    margin-left: 8px;
    > h2 {
      font-size: 20px;
      margin-top: 50px;
    }
    > h3 {
      margin-top: 20px;
      font-size: 17px;
    }
    > h4 {
      font-size: 16px;
    }
  }

  .title__wrap--mod-3 {
    > h2 {
      font-size: 17px;
    }

    > h3 {
      font-size: 15px;
    }
    > h4 {
      font-size: 14px;
    }
  }

  @media (max-width: 567px) {
    position: absolute;
    top: 30px;
    bottom: 20px;
    border-bottom-left-radius: inherit;
    border-top-right-radius: 40px;
    width: 80%;
    align-items: center;
    text-align: center;
    white-space: pre-wrap;
    word-break: break-word;
    > h2 {
      font-size: 40px;
      bottom: 50px;
    }

    > h3 {
      font-size: 18px;
    }
    > h4 {
      font-size: 16px;
    }

    .title__wrap--mod-1 {
      > h2 {
        font-size: 24px;
      }
    }

    .title__wrap--mod-2 {
      > h2 {
        font-size: 24px;
      }
    }

    .title__wrap--mod-3 {
      > h2 {
        font-size: 24px;
      }

      > h3 {
        font-size: 20px;
      }
      > h4 {
        font-size: 16px;
      }
    }
  }
`;

const Info = styled.div`
  background-color: #007fff;
  color: #2b2a2a;
  white-space: pre-wrap;
  word-break: break-word;
  width: 800px;
  height: 250px;
  z-index: 2;
  border-radius: 30px;

  @media only screen and (max-width: 896px) and (orientation: landscape) {
    height: 80%;
  }

  @media (max-width: 768px) {
    width: 450px;
    height: 500px;

    > ul {
      margin-top: 20px;
    }
  }

  @media (max-width: 567px) {
    margin-top: 55px;
    margin-right: 20px;
    margin-left: 20px;
    height: 600px;
    > li {
      margin: 10px 0;
    }
  }
`;

const Items = styled(CarouselItem)`
  line-height: 40px;
`;

const ResumeHeading = styled.h2`
  font-size: 60px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    font-size: 55px;
  }
`;
