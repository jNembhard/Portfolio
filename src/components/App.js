import React from "react";
// import styled from "styled-components";
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Sections> */}
      <Info />
      <About />
      {/* <Portfolio/> */}
      <Contact />
      <Footer />
      {/* </Sections> */}
    </div>
  );
}

export default App;

// const Sections = styled.div``;
