import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";
import useScrollBlock from "./hooks/useScrollBlock";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";

function Header(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () =>
    setModalOpen(false) ? blockScroll() : allowScroll()
  );

  const sides = [
    { id: 1, option: "About", section: "#about" },
    { id: 2, option: "Experience", section: "#experience" },
    { id: 3, option: "Portfolio", section: "#portfolio" },
    { id: 4, option: "Contact ", section: "#contact" },
  ];

  return (
    <div ref={wrapperRef}>
      <Container>
        <h1>jason.</h1>

        <div>
          <HeaderNav>
            {sides.map((side) => (
              <HeaderOption>
                <AnchorLine key={side.id} href={side.section}>
                  {side.option}
                </AnchorLine>
              </HeaderOption>
            ))}
            <HeaderBtnWrap>
              <MDBBtns outline color="info">
                Resume
                <MDBIconS fas icon="download" />
              </MDBBtns>
            </HeaderBtnWrap>
          </HeaderNav>

          <RightMenu>
            <CustomBurger
              hideOutline={false}
              toggled={modalOpen}
              toggle={setModalOpen}
              onToggle={(toggled) => (toggled ? blockScroll() : allowScroll())}
            />
          </RightMenu>

          <BurgerNav modalOpen={modalOpen}>
            <div className="contain">
              {sides.map((side) => (
                <ul key={side.id}>
                  <li key={side.id} onClick={() => setModalOpen(false)}>
                    <a onClick={() => allowScroll()} href={side.section}>
                      {side.option}
                    </a>
                  </li>
                </ul>
              ))}
              <BtnNav>
                <MDBBtns outline color="info">
                  Resume
                  <MDBIconS fas icon="download" />
                </MDBBtns>
              </BtnNav>
            </div>
          </BurgerNav>
        </div>
      </Container>
    </div>
  );
}

export default Header;

const Container = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  > h1 {
    margin-left: 20px;
    margin-top: 10px;
  }

  .move {
    padding: 50px;
  }
`;

const HeaderNav = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BtnNav = styled.div`
  margin: 0 20px;
  width: 200px;
`;

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 10px;
  margin-top: 20px;
`;

const HeaderBtnWrap = styled(HeaderOption)`
  margin-top: 15px;
  margin-right: 20px;
`;

const MDBBtns = styled(MDBBtn)`
  &:hover {
    color: yellow;
  }
`;

const MDBIconS = styled(MDBIcon)`
  padding-left: 5px;
`;

const AnchorLine = styled.a`
  font-weight: 500;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: yellow;
  }
`;

const BurgerNav = styled.div`
  display: none;
  @media (max-width: 768px) {
    height: 100vh;
    display: inherit;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background-color: white;
    width: 300px;
    z-index: 100;
    padding: 20px;
    flex-direction: column;
    text-align: start;
    transform: translateX(${(props) => (props.modalOpen ? 0 : 100)}%);
    transition: transform 0.2s ease-in-out;
    overflow: hidden;

    & .contain {
      margin-top: 20px;
    }
    ul {
      list-style-type: none;
      padding: 5px 10px;
      padding-left: 20px;
    }

    li {
      padding: 5px 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);

      a {
        font-weight: 600;
        text-decoration: none;
        color: inherit;

        &:hover {
          color: yellow;
        }
      }
    }
  }
`;

const RightMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    z-index: 102;
    position: absolute;
    top: 5px;
    right: 15px;
  }
`;

const CustomBurger = styled(Hamburger)`
  @media (max-width: 768px) {
    cursor: pointer;
  }
`;
