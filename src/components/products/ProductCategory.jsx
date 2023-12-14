import React from "react";
import "./Product.css";
import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../../data/item";
import HeaderTwo from "../Navbar/HeaderTwo";
import Footer from "../footer/Footer";

function ProductCategory() {
    let { category } = useParams();

    const prodCategory = PRODUCTS.filter((item) => {
        return item.category === category && item.group !== "1";
    });
    return (
        <>
            <HeaderTwo />
            <div>
                <div className="groupedItems-products-category">
                    <div className="groupedItems-product__items-container">
                        {prodCategory.map((item) => {
                            return (
                                <div
                                    className="groupedItems-product__items"
                                    key={item.id}
                                >
                                    <Link to={`/product/${item.id}`}>
                                        <div className="groupedItems-img-container">
                                            <img
                                                src={item.url}
                                                alt={item.title}
                                            ></img>
                                        </div>
                                        <div className="groupedItems-text-container">
                                            <p className="groupedItems-title">
                                                {item.title}
                                            </p>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductCategory;
