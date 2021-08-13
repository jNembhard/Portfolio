import React, { useState } from "react";
import styled from "styled-components";
import { useSwipeable } from "react-swipeable";

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
  );
};

export default Carousel;

const CarouselWrap = styled.div`
  overflow: hidden;
  align-items: center;
  background-color: crimson;

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
  background-color: crimson;
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
    width: 150px;
    height: 80px;
    border-radius: 50px;
    text-align: center;
    background-color: orange;
    cursor: pointer;
    > h6 {
      margin: auto;
    }
    @media (max-width: 567px) {
      display: none;
    }
  }
  .right {
    width: 150px;
    height: 80px;
    background-color: orange;
    margin: 5px;
    margin-left: 20px;
    border-radius: 50px;
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
    background-color: yellow;
    background-color: #2a2a2a;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    margin-right: 30px;
  }

  .active {
    background-color: SkyBlue;
    color: #ffffff;
  }

  @media (max-width: 567px) {
  }
`;