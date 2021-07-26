import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";
import useScrollBlock from "./hooks/useScrollBlock";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import { MDBBtn } from "mdb-react-ui-kit";

function Header(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () =>
    setModalOpen(false) ? blockScroll() : allowScroll()
  );
  // const [scorll, setScroll] = useOnClickOutside();

  const sides = [
    { id: 1, option: "About" },
    { id: 2, option: "Portfolio" },
    { id: 3, option: "Contact " },
  ];

  return (
    <div ref={wrapperRef}>
      <HeaderWrapper>
        <ContainerOne>
          {/* <Logo /> */}
          <h1>jason.</h1>
        </ContainerOne>

        <ContainerTwo>
          <HeaderNav>
            {sides.map((side) => (
              <HeaderOption>
                <OptionLine key={side.id}>{side.option}</OptionLine>
              </HeaderOption>
            ))}
            <HeaderBtnWrap>
              <MDBBtns outline color="info">
                Resume
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
                <a href="...">About</a>
              </li>
              <li>
                <a href="...">Portfolio</a>
              </li>
              <li>
                <a href="...">Contact</a>
              </li>
            </ul>
            <BtnNav>
              <MDBBtns outline color="info">
                Resume
              </MDBBtns>
            </BtnNav>
          </BurgerNav>
        </ContainerTwo>
      </HeaderWrapper>
    </div>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  height: 60px;
  display: flex;
  top: 0;
  /* background-color: lightblue; */
  z-index: 1;
`;

const ContainerOne = styled.div`
  display: flex;
  margin-left: 25px;
  margin-top: 2px;
  z-index: 2;
  @media (min-width) {
    margin-top: 10px;
  }
`;

const ContainerTwo = styled.div`
  display: flex;
  margin-left: auto;
  overflow-y: hidden;
`;
const HeaderNav = styled.div`
  display: flex;
  flex: 1;
  /* justify-content: space-evenly; */

  @media (max-width: 768px) {
    display: none;
  }
`;

const BtnNav = styled.div`
  padding: 0 150px;
`;
// const Logo = styled.div``;

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

const OptionLine = styled.span`
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: yellow;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 99;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: translateX(${(props) => (props.modalOpen ? 0 : 100)}%);
  /* visibility: ${(props) => (props.modalOpen ? "visible" : "hidden")}; */

  transition: transform 0.2s ease-in-out;

  ul {
    list-style-type: none;
    padding: 20px 0;
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
`;

const RightMenu = styled.div`
  display: none;
  align-items: center;
  margin-right: 20px;
  z-index: 100;
  @media (max-width: 768px) {
    display: flex;
  }
`;

// const Menu = styled.div``;

// const CloseWrapper = styled.div`
//   display: flex;
//   justify-content: flex-end;
// `;

const CustomBurger = styled(Hamburger)`
  cursor: pointer;
  z-index: 100;
`;

// const CustomClose = styled(Hamburger)`
//   cursor: pointer;
//   text-align: right;
// `;
