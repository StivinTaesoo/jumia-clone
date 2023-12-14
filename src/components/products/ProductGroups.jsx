import React from "react";
import "./ProductGroups.css";
import { PRODUCTS } from "../../data/item";
import ProductGroupsCard from "./ProductGroupsCard";

function ProductGroup() {
    let groupFilter = PRODUCTS.filter((item) => {
        return item.group === "2";
    });
    let group3 = PRODUCTS.filter((item) => {
        return item.group === "3";
    });
    let group4 = PRODUCTS.filter((item) => {
        return item.group === "4";
    });
    const style = {
        white: { backgroundColor: "white", color: "black" },
        red: { backgroundColor: "red", color: "white" },
        pink: { backgroundColor: "#ffd7d7", color: "black" },
    };

    return (
        <div className="clothing__container">
            <div className="product-container">
                <ProductGroupsCard
                    data={groupFilter}
                    headingTitle={"Top Selling Items"}
                    style={style.white}
                />
            </div>

            <div className="product-container">
                <ProductGroupsCard
                    data={group3}
                    headingTitle={"Flash Sales"}
                    timeLeft={"Time Left: 18h:49m:10s"}
                    seeAll={`SEE ALL `}
                    style={style.red}
                />
            </div>
            <div className="product-container">
                <ProductGroupsCard
                    data={group4}
                    headingTitle={"Limited Stock Deals"}
                    style={style.pink}
                />
            </div>
        </div>
    );
}

export default ProductGroup;
