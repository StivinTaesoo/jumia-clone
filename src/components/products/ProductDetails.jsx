import React from "react";
import "./ProductDetails.css";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/item";
import ProductDetailsCard from "./ProductDetailsCard";
import ProductDescription from "./ProductDescription";
import ProductGroupsCard from "./ProductGroupsCard";
import HeaderTwo from "../Navbar/HeaderTwo";
import Footer from "../footer/Footer";
import BackToTopBtn from "../home/BackToTopBtn";
import Navbar from "../Navbar/Navbar";
import { FaTelegramPlane } from "react-icons/fa";
import { RiArrowDownSFill } from "react-icons/ri";

function ProductDetails() {
    let { id } = useParams();
    let group4 = PRODUCTS.filter((item) => {
        return item.group === "4";
    });
    const style = {
        white: { backgroundColor: "white", color: "black" },
        red: { backgroundColor: "red", color: "white" },
        pink: { backgroundColor: "#ffd7d7", color: "black" },
    };

    const prodActive = PRODUCTS.filter((item) => item.id === id);
    return (
        <>
            <Navbar />
            <HeaderTwo />
            <div className="productDetails">
                <div className="item-path">
                    {prodActive.map((item) => {
                        return (
                            <>
                                Home {" > "} {item.category} {" > "}{" "}
                                {item.brand} {" > "} {item.title}
                            </>
                        );
                    })}
                </div>

                <div className="productDetails__container">
                    <div className="productDetails-left-container">
                        {prodActive.map((item) => {
                            return <ProductDetailsCard data={item} />;
                        })}
                    </div>
                    <div className="productDetails-right">
                        <h5>DELIVERY & RETURNS</h5>
                        <div className="jumia-express">
                            <strong>
                                JUMIA
                                <span className="red">
                                    <FaTelegramPlane />
                                    EXPRESS
                                </span>
                            </strong>

                            <p>
                                Free delivery on thoussands of products in
                                Lagos, Ibadan & Abuja <Link>Details</Link>
                            </p>
                        </div>
                        <h4>Choose you location</h4>
                        <div className="locations">
                            <span>Lagos</span>
                            <span>
                                <RiArrowDownSFill />
                            </span>
                        </div>
                        <div className="locations">
                            <span>LEKKI-AJAH (SANGOTEDO)</span>
                            <span>
                                <RiArrowDownSFill />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="product-container">
                <ProductGroupsCard
                    data={group4}
                    headingTitle={"Flash Sales"}
                    timeLeft={"Time Left: 18h:49m:10s"}
                    seeAll={"SEE ALL "}
                    style={style.red}
                />
            </div>
            <div className="ProductDescription">
                <div className="productDetails__container">
                    <div className="productDetails-left-container">
                        <ProductDescription />
                    </div>
                    <div className="productDetails-right"></div>
                </div>
            </div>
            <BackToTopBtn />
            <Footer />
        </>
    );
}

export default ProductDetails;
