import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";
import ProdDescription from "../components/ProdDescription";
import Faqs from "../components/Faqs";

function Product(){
    return(
        <>
        <Header />
        <ProdDescription />
        <Faqs />
        <Footer />
        </>
    );
}
export default Product;