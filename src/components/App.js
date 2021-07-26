import React, { useRef } from "react";
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
// import Placeholder from "./Placeholder";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <About />
      {/* <Placeholder /> */}
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

// const Sections = styled.div``;
