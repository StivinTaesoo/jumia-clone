import React from "react";
import "./GroupedItemsOne.css";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../../data/item";

function GroupedItemsOne() {
    const sectionOneItems = PRODUCTS.filter((element) => {
        return element.group === "1";
    });
    console.log(sectionOneItems);
    return (
        <div>
            <div className="groupedItems-products-category">
                <div className="groupedItems-product__items-container">
                    {sectionOneItems.map((item) => {
                        return (
                            <div
                                className="groupedItems-product__items"
                                key={item.id}
                            >
                                <Link to={`/products/${item.category}`}>
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
    );
}

export default GroupedItemsOne;
