import React from "react";

import Header from "./containers/Header";
import Footer from "./containers/footer";
import Banner from "./containers/banner";
import ProductGrid from "./containers/homeProductsGrid";

import "./styles/main.css";


function App() {
  return (
    <React.Fragment>
      <div className="mainWrap">
        <Header/>
        <Banner/>
        <ProductGrid />
        <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
