import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";
import Fade from "react-reveal/Fade";

export const CarouselItem = ({ children, width }) => {
  return (
    <CarouselItemWrap style={{ width: width }}>{children}</CarouselItemWrap>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  });

  return (
    <Fade>
      <CarouselWrap>
        <div
          {...handlers}
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
        <Indicators>
          <div
            className="left"
            onClick={() => {
              updateIndex(activeIndex - 1);
            }}
          >
            <h6>Left</h6>
          </div>
          {React.Children.map(children, (child, index) => {
            return (
              <div
                className={`${index === activeIndex ? "active" : ""}`}
                onClick={() => {
                  updateIndex(index);
                }}
              ></div>
            );
          })}
          <div
            className="right"
            onClick={() => {
              updateIndex(activeIndex + 1);
            }}
          >
            <h6>Right</h6>
          </div>
        </Indicators>
      </CarouselWrap>
    </Fade>
  );
};

export default Carousel;

const CarouselWrap = styled.div`
  overflow: hidden;
  align-items: center;
  background-color: crimson;
  /* height: 900px; */

  .inner {
    white-space: nowrap;
    transition: transform 0.4s;
  }
`;

const CarouselItemWrap = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  /* background-color: crimson; */
  color: #ffffff;

  @media (max-width: 768px) {
    height: 600px;
  }

  @media (max-width: 567px) {
    height: 900px;
  }
`;

const Indicators = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .left {
    display: grid;
    margin: 5px;
    margin-right: 50px;
    width: 140px;
    height: 55px;
    border-radius: 12px;
    text-align: center;
    background-color: #f59b42;
    color: #111;
    cursor: pointer;
    > h6 {
      margin: auto;
    }
    @media (max-width: 567px) {
      display: none;
    }
  }
  .right {
    width: 140px;
    height: 55px;
    background-color: #f59b42;
    color: #111;
    margin: 5px;
    margin-left: 20px;
    border-radius: 12px;
    display: grid;
    cursor: pointer;
    > h6 {
      margin: auto;
    }
    @media (max-width: 567px) {
      display: none;
    }
  }

  > div {
    background-color: #2a2a2a;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin-right: 30px;

    cursor: pointer;
    @media (max-width: 567px) {
      margin-bottom: 50px;
      margin-right: 15px;
      margin-left: 15px;
    }
  }

  .active {
    background-color: #007fff;
    color: #ffffff;
  }
`;
