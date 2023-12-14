import React from "react";
import { useStateValue } from "../../context/StateProvider";
import { MdOutlineAddShoppingCart, MdFavoriteBorder } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import ProductDescription from "./ProductDescription";

function ProductDetailsCard(props) {
    const { addToCart, cartItems } = useStateValue();
    const { id, url, title, price, prevPrice, percentage } = props.data;

    const cartItemAmount = cartItems[id];

    return (
        <div>
            <div className="productDetails-left">
                <div className="productDetails-img-container ">
                    <img src={url} alt={title} />
                </div>
                <div className="productDetails-text-container">
                    <div className="title product-title">
                        <spa>{title}</spa>
                        <MdFavoriteBorder className="favorite-icon" />
                    </div>

                    <div className="rating-before">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <div className="rating-after">
                            {Array(3)
                                .fill()
                                .map((_) => (
                                    <AiFillStar />
                                ))}
                        </div>
                    </div>
                    <div className="anniversary-deal"> Anniversary Deal</div>
                    <div className="price-container top-border">
                        <span className="currency">
                            <b>N</b>
                        </span>
                        <span className="price">
                            <b>{price}</b>{" "}
                        </span>
                    </div>
                    <div className="price-container small">
                        <span className="currency prev-price">N</span>
                        <span className="prev-price line-strike">
                            {prevPrice}
                        </span>
                    </div>
                    <div className="in-stock">In stock</div>
                    <div className="shipping">
                        + shipping from <span className="currency ">N</span> 250
                        to LEKKI-AJAH (SANGOTEDO)
                    </div>
                    <button
                        className="btn btn-wide"
                        onClick={() => addToCart(id)}
                    >
                        <MdOutlineAddShoppingCart className="add-cart-icon" />
                        <span>
                            ADD TO CART{" "}
                            {cartItemAmount > 0 && <>({cartItemAmount}) </>}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsCard;
