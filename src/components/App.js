import React from "react";
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";
import styled from "styled-components";

function App() {
  return (
    <AppWrap>
      <div className="boundary">
        <Header />
        <Info />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    </AppWrap>
  );
}

export default App;

const AppWrap = styled.div`
  @media only screen and (max-width: 896px) and (orientation: landscape) {
    & .boundary {
      padding-left: 100px;
    }
  }
`;
