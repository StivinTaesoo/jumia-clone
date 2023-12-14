import React from "react";
import { Link } from "react-router-dom";
import { MdChevronRight } from "react-icons/md";

function ProductGroupsCard({ data, style, headingTitle, timeLeft, seeAll }) {
    return (
        <div className="product__container productGroupsCard">
            <div className="product-heading heading-flex" style={style}>
                <span>{headingTitle}</span>
                <span>{timeLeft}</span>
                <h6>
                    {seeAll}{" "}
                    {seeAll && <MdChevronRight style={{ fontSize: "18px" }} />}
                </h6>
            </div>

            <div className="productGroups-container">
                {data.map((item) => {
                    return (
                        <Link to={`/product/${item.id}`}>
                            <div className="productGroups-details">
                                <div className="productGroups-img-container">
                                    <img src={item.url} alt="Products" />
                                </div>
                                <div className="productGroups-text-container">
                                    <div className="productGroups-title">
                                        {item.title.substring(0, 20)}...
                                    </div>
                                    <div className="priceGroups-container">
                                        <span className="currency">N</span>
                                        <span className="price">
                                            {item.price}
                                        </span>
                                    </div>
                                    <div className="priceGroups-container small">
                                        <span className="currency prev-price">
                                            N
                                        </span>
                                        <span className="prev-price line-strike">
                                            {item.prevPrice}
                                        </span>
                                    </div>
                                </div>
                                <div className="percentage">
                                    {item.percentage}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

export default ProductGroupsCard;
