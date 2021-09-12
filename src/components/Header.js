import React, { useState, useRef } from "react";
import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";
import useScrollBlock from "./hooks/useScrollBlock";
import { useOnClickOutside } from "./hooks/useOnClickOutside";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
import fileSaver from "file-saver";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

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

  const saveFile = () => {
    fileSaver.saveAs(
      process.env.PUBLIC_URL + "/resume/Jason_Nembhard_Resume.pdf",
      "Jason Nembhard Resume.pdf"
    );
  };

  return (
    <div ref={wrapperRef}>
      <Container>
        <HeaderBtnWrap>
          <Fade bottom delay={800}>
            <MDBBtnLeft outline color="primary" onClick={saveFile}>
              Resume
              <MDBIconLeft fas icon="download" />
            </MDBBtnLeft>
          </Fade>
        </HeaderBtnWrap>

        <div>
          <HeaderNav>
            {sides.map((side) => (
              <HeaderOption key={side.id}>
                <AnchorLine href={side.section}>
                  <Flip left cascade delay={800}>
                    {side.option}
                  </Flip>
                </AnchorLine>
              </HeaderOption>
            ))}

            <HeaderBtnWrap>
              <Fade bottom delay={800}>
                <MDBBtns outline color="primary" onClick={saveFile}>
                  Resume
                  <MDBIconS fas icon="download" />
                </MDBBtns>
              </Fade>
            </HeaderBtnWrap>
          </HeaderNav>

          <RightMenu>
            <Fade bottom delay={800}>
              <CustomBurger
                hideOutline={true}
                toggled={modalOpen}
                toggle={setModalOpen}
                onToggle={(toggled) =>
                  toggled ? blockScroll() : allowScroll()
                }
              />
            </Fade>
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
                <MDBBtns outline color="primary" onClick={saveFile}>
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
  position: absolute;
  z-index: 5;
  height: 60px;
  display: flex;
  justify-content: space-between;
  top: 0;
  left: 0;
  right: 0;

  background-color: transparent;
  color: #ffffff;

  > h1 {
    margin-left: 20px;
    margin-top: 10px;
  }

  .move {
    padding: 50px;
  }
`;

const HeaderNav = styled.div`
  z-index: 5;
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
    color: gold;
    background-color: #1266f1;
  }
`;

const MDBBtnLeft = styled(MDBBtns)`
  display: none;
  @media (max-width: 768px) {
    display: inherit;
  }
`;

const MDBIconS = styled(MDBIcon)`
  padding-left: 5px;
`;

const MDBIconLeft = styled(MDBIconS)`
  padding-top: 2px;
`;

const AnchorLine = styled.a`
  font-weight: 500;
  cursor: pointer;
  color: inherit;

  &:hover {
    color: gold;
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
    background-color: #403f4c;
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
          color: gold;
        }
      }
    }
  }
`;

const RightMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: inherit;
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
