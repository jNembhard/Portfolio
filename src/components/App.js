import React from "react";
import Header from "./Header";
import Info from "./Info";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Footer from "./Footer";
import Resume from "./Resume";

function App() {
  return (
    <div className="App">
      <Header />
      <Info />
      <About />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
