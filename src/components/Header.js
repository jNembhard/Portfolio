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
    { id: 2, option: "Portfolio", section: "#portfolio" },
    { id: 3, option: "Contact ", section: "#contact" },
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
            <ul>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <BtnNav>
              <MDBBtns outline color="info">
                Resume
                <MDBIconS fas icon="download" />
              </MDBBtns>
            </BtnNav>
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
`;

const HeaderNav = styled.div`
  display: flex;

  @media (max-width: 539px) {
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
  @media (max-width: 539px) {
    height: 100vh;
    display: inherit;
    position: -webkit-sticky;
    position: sticky;
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

    ul {
      list-style-type: none;
      padding: 5px 0;
      padding-left: 15px;
    }

    li {
      padding: 15px 0;
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

  @media (max-width: 539px) {
    display: flex;
    justify-content: flex-end;
    margin-right: 15px;
    margin-top: 10px;
    z-index: 101;
  }
`;

const CustomBurger = styled(Hamburger)`
  @media (max-width: 539px) {
    cursor: pointer;
    z-index: 102;
  }
`;
