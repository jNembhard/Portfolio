import React, { useState } from "react";
import styled from "styled-components";
import { Spin as Hamburger } from "hamburger-react";

function Header(props) {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <HeaderWrapper>
      <ContainerOne>
        {/* <Logo /> */}
        <h1>Logo</h1>
      </ContainerOne>

      <HeaderNav>
        <HeaderOption>
          <OptionLine>About</OptionLine>
        </HeaderOption>
        <HeaderOption>
          <OptionLine>Projects</OptionLine>
        </HeaderOption>
        <HeaderOption>
          <OptionLine>Contact</OptionLine>
        </HeaderOption>
      </HeaderNav>

      <ContainerTwo>
        <RightMenu>
          <CustomBurger toggled={burgerStatus} toggle={setBurgerStatus} />
        </RightMenu>
        <BurgerNav show={burgerStatus}>
          <ul>
            <li>
              <a href="...">About</a>
            </li>
            <li>
              <a href="...">Projects</a>
            </li>
            <li>
              <a href="...">Resume</a>
            </li>
            <li>
              <a href="...">Contact</a>
            </li>
          </ul>
        </BurgerNav>
      </ContainerTwo>
    </HeaderWrapper>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  height: 60px;
  display: flex;
  top: 0;
  background-color: lightblue;
  z-index: 1;
`;

const ContainerOne = styled.div`
  display: flex;
  margin-left: 20px;
  z-index: 2;
`;

const ContainerTwo = styled.div`
  display: flex;
  margin-left: auto;
`;
const HeaderNav = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    display: none;
  }
`;

// const Logo = styled.div``;

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  margin-right: 10px;
  margin-top: 20px;
`;
const OptionLine = styled.span`
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: yellow;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
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
  display: flex;
  align-items: center;
  margin-right: 20px;
  z-index: 100;
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
