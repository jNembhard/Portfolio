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
  height: 600px;
  margin-bottom: 150px;
  background-color: crimson;
  border-color: transparent;

  @media (max-width: 768px) {
    height: 1400px;
  }

  @media (max-width: 500px) {
    height: 2350px;
  }

  @media (max-width: 376px) {
    height: 2800px;
  }

  @media (max-width: 321px) {
    height: 3600px;
  }
`;

const SliderContainer = styled.div`
  height: 500px;
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  left: 0;
  transition: all 1s ease-out;

  & .arrow {
    height: 50px;
    position: absolute;
    cursor: pointer;
  }
  & .left {
    left: 100px;
    transform: rotateY(180deg);
  }
  & .right {
    right: 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    top: 0;
    height: 1300px;
    & .arrow {
      display: none;
    }
  }

  @media (max-width: 500px) {
    height: 2250px;
  }

  @media (max-width: 376px) {
    height: 3200px;
  }

  @media (max-width: 321px) {
    height: 4300px;
  }
`;

const ResumeHeading = styled.h2`
  font-size: 60px;
  display: flex;
  justify-content: center;
  background-color: white;
`;

const Slider = styled.div`
  height: 350px;
  display: flex;
  position: absolute;
  left: 0;
  transform: translateX(${(props) => -props.currentSlider * 100}vw);
  transition: all 1s ease-out;

  @media (max-width: 768px) {
    height: 800px;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    height: 1200px;
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: white;
  border: 8px solid #b22222; */
  @media (max-width: 768px) {
    height: 50%;
    width: 95vw;
    padding-bottom: 400px;
  }

  @media (max-width: 500px) {
    padding-bottom: 150px;
    height: 80%;
  }

  @media (max-width: 420px) {
    padding-bottom: 300px;
    height: 60%;
  }

  @media (max-width: 412px) {
    padding-bottom: 350px;
  }

  @media (max-width: 376px) {
    padding-bottom: 830px;
  }

  @media (max-width: 321px) {
    padding-bottom: 1100px;
  }
`;

const Item = styled.div`
  width: 900px;
  height: 50%;
  background-color: SandyBrown;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    height: 200px;
    /* margin: 15px 0; */
    margin-top: 50%;
  }

  @media (max-width: 500px) {
    margin-top: 50%;
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

  @media (max-width: 768px) {
    flex: 3;
  }

  @media (max-width: 500px) {
    flex: 4;
    height: 240px;
  }

  @media (max-width: 320px) {
    flex: 5;
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
`;

const RightContainer = styled.div`
  flex: 8;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex: 9;
  }
`;

const LeftContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  > h2 {
    font-size: 18px;
    color: #2a2a2a;
  }
  > p {
    font-size: 12.5px;
    font-weight: 600;
    color: #2a2a2a;
  }
  > span {
    font-size: 12px;
    font-weight: 500;
    margin-top: 0;
    color: #2a2a2a;
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
