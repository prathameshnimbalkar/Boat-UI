import React from "react";
import Header from "../components/Header";
import Corousel from "../components/Corousel";
import Products from "../components/Products";
import CorouselWatches from "../components/CorouselWatches";
import Watches from "../components/Watches";
import Footer from "../components/Footer";

function Home(){
    return(
      <>
          <Header />
          <Corousel />
          <Products />
          <CorouselWatches />
          <Watches />
          <Footer />

      </>
    );
  }
  
  export default Home;