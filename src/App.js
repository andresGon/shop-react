import React from "react";

import Header from "./containers/Header";
import Footer from "./containers/footer";
import Banner from "./containers/banner";
import ApiCall from "./components/api-test";
//import SimpleSlider from "./containers/slider";

import "./styles/main.css";


function App() {
  return (
    <React.Fragment>
      <div className="mainWrap">
        <Header/>
        <Banner/>
          <ApiCall/>
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
