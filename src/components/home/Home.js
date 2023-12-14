import React from "react";

import HeroSection from "./HeroSection";
import Products from "../products/Products";
import ProductGroups from "../products/ProductGroups";
import Footer from "../footer/Footer";
import BackToTopBtn from "./BackToTopBtn";
import Header from "../Navbar/Header";
import Navbar from "../Navbar/Navbar";
import MobileNavbar from "../mobileView/MobileNavbar";
import MobileMenu from "../mobileView/MobileMenu";
import { ContactDetails } from "../mobileView/ContactDetails";

function Home() {
    return (
        <div>
            <Navbar />
            <MobileNavbar />
            <ContactDetails />
            <MobileMenu />
            <Header />
            <HeroSection />
            <Products />
            <ProductGroups />
            <Footer />
            <BackToTopBtn />
        </div>
    );
}

export default Home;
