import React, { useState } from "react";
import styled from "styled-components";
import { MDBIcon } from "mdb-react-ui-kit";
function Resume() {
  const [currentSlider, setCurrentSlider] = useState(0);

  const data = [
    {
      id: "1",
      icon: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      title: "First Slide",
      description: "Lorem ipsum aldktjalwdktja adtattaoij then I dipsum",
      img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    },
    {
      id: "2",
      icon: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      title: "Second Slide",
      description: "Lorem ipsum aldktjalwdktja adtattaoij then I dipsum",
      img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    },
    {
      id: "3",
      icon: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
      title: "Last Slide",
      description: "Lorem ipsum aldktjalwdktja adtattaoij then I dipsum",
      img: "https://www.pixsy.com/wp-content/uploads/2021/04/ben-sweet-2LowviVHZ-E-unsplash-1.jpeg",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setCurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <SliderWrap>
      <Slider currentSlider={currentSlider}>
        {data.map((d) => (
          <Container>
            <Item>
              <Left>
                <LeftContainer>
                  <ImageContainer>
                    <img src={d.icon} alt="test" />
                  </ImageContainer>
                  <h2>{d.title}</h2>
                  <p>{d.description}</p>
                  <span>Some more stuff</span>
                </LeftContainer>
              </Left>
              <Right>
                <img src={d.img} alt="test2" />
              </Right>
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
    </SliderWrap>
  );
}

export default Resume;

const SliderWrap = styled.div`
  background-color: crimson;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  position: relative;

  @media (max-width: 768px) {
    height: 600px;
  }

  & .arrow {
    height: 50px;
    position: absolute;

    @media (max-width: 500px) {
      display: none;
    }
  }

  & .left {
    left: 100px;
    transform: rotateY(180deg);
  }

  & .right {
    right: 100px;
  }
`;

const Slider = styled.div`
  height: 350px;
  display: flex;
  position: absolute;
  left: 0;
  transform: translateX(${(props) => -props.currentSlider * 100}vw);
  transition: all 1s ease-out;

  @media (max-width: 768px) {
    height: 100vh;
    flex-direction: column;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Item = styled.div`
  width: 700px;
  height: 100%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
    height: 180px;
    margin: 5px 0;
  }
`;
const Left = styled.div`
  flex: 4;
  height: 80%;
  background-color: lightgray;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Right = styled(Left)`
  flex: 8;
  background-color: lightblue;
  align-items: center;
  justify-content: center;

  > img {
    width: 400px;
    transform: rotate(-10deg);

    @media (max-width: 768px) {
      width: 200px;
    }
  }
`;

const LeftContainer = styled.div`
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > h2 {
    font-size: 20px;
  }

  > p {
    font-size: 13px;
  }

  > span {
    font-size: 12px;
    font-weight: 600;
    text-decoration: underline;
  }
`;
const ImageContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgb(245, 179, 155);
  display: flex;
  align-items: center;
  justify-content: center;

  > img {
    width: 25px;
  }
`;

const MDBIconS = styled(MDBIcon)`
  .arrow {
    height: 50px;
    position: absolute;

    &.left {
      left: 100px;
    }
  }
`;
