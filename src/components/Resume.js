import React, { useState } from "react";
import styled from "styled-components";
import { MDBIcon } from "mdb-react-ui-kit";
import experiences from "./data/experienceDatasets";

function Resume() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < experiences.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <SliderWrap id="experience">
      <ResumeHeading>Experience</ResumeHeading>
      <SliderContainer>
        <Slider currentSlider={currentSlider}>
          {experiences.map((experience) => (
            <Container key={experience.id}>
              <Item>
                <Left>
                  <LeftContainer>
                    <ImageContainer>
                      <MDBIcon className="image" fas icon={experience.icon} />
                    </ImageContainer>
                    <h2>{experience.title}</h2>
                    <p>{experience.subtitle}</p>

                    <span>{experience.date}</span>
                  </LeftContainer>
                </Left>
                <RightContainer>
                  <Right>
                    {experience.achievements.map((achievement) => (
                      <ul key={achievement.id}>
                        <li>{achievement.item}</li>
                      </ul>
                    ))}
                  </Right>
                </RightContainer>
              </Item>
            </Container>
          ))}
        </Slider>

        <img
          src={process.env.PUBLIC_URL + "/images/arrow.png"}
          className="arrow left"
          alt="arrow"
          onClick={() => handleClick("left")}
        />
        <img
          src={process.env.PUBLIC_URL + "/images/arrow.png"}
          className="arrow right"
          alt="arrow"
          onClick={() => handleClick()}
        />
      </SliderContainer>
    </SliderWrap>
  );
}

export default Resume;

const SliderWrap = styled.div`
  margin-bottom: 150px;
  overflow: hidden;

  @media (max-width: 897px) {
    height: 1750px;
    margin-bottom: 100px;
  }

  @media (max-width: 500px) {
    height: 2400px;
    margin-bottom: 100px;
  }
  @media only screen and (max-width: 896px) and (orientation: landscape) {
    width: 880px;
  }
`;
const SliderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: crimson;
  height: 600px;
  position: relative;

  @media (max-width: 897px) {
    height: 1675px;
    flex-direction: column;

    & .arrow {
      display: none;
    }
  }

  @media (max-width: 500px) {
    height: 2350px;
  }

  & .arrow {
    height: 50px;
    position: absolute;
  }

  & .left {
    left: 100px;
    transform: rotateY(180deg);
  }

  & .right {
    right: 100px;
  }
`;

const ResumeHeading = styled.h2`
  font-size: 60px;
  display: flex;
  justify-content: center;
  @media (max-width: 897px) {
    font-size: 55px;
  }
`;
const Slider = styled.div`
  height: 350px;
  display: flex;
  position: absolute;
  left: 0;
  transform: translateX(${(props) => -props.currentSlider * 100}vw);
  transition: all 1s ease-out;

  @media (max-width: 897px) {
    height: 73%;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    height: 70%;
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 897px) {
    margin-bottom: 50px;
  }
`;

const Item = styled.div`
  width: 900px;
  height: 45%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 897px) {
    width: 90%;
    height: 217px;
    margin: 5px 0;
    margin-bottom: 180px;
  }

  @media (max-width: 500px) {
    width: 95%;
    height: 250px;
    margin-bottom: 400px;
  }
`;
const Left = styled.div`
  z-index: 96;
  flex: 2;
  height: 100%;
  background-color: SandyBrown;
  border-top-left-radius: 20px 20px;
  border-bottom-left-radius: 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 897px) {
    flex: 3;
  }
`;

const Right = styled.div`
  z-index: 97;
  background-color: SkyBlue;
  border-radius: 20px;
  align-items: center;
  height: 20%;

  ul > li {
    margin-top: -3px;
  }

  @media (max-width: 897px) {
    height: 70%;
  }
`;

const RightContainer = styled.div`
  flex: 8;
  justify-content: space-around;
`;

const LeftContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > h2 {
    font-size: 20px;
  }

  > p {
    font-size: 12.5px;
  }

  > span {
    font-size: 12px;
    font-weight: 600;
    text-decoration: underline;
    margin-top: 0;
  }
`;

const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: SeaShell;
  display: flex;
  align-items: center;
  justify-content: center;

  & .image {
    height: 40px;
    margin-top: 25px;
  }
`;
