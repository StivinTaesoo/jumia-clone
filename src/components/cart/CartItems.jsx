import React from "react";
import "./Cart.css";
import { useStateValue } from "../../context/StateProvider";
import { MdOutlineAddShoppingCart } from "react-icons/md";

function CartItems(props) {
    const { removeFromCart } = useStateValue();

    const { id, url, title, price, prevPrice, percentage } = props.data;

    return (
        <div className="cart-left">
            <div className="cart__img-container">
                <img src={url} alt={title} />
            </div>
            <div className="text-container product-text-container">
                <div className="title product-title">{title}</div>
                <div className="price-container">
                    <span className="currency">N</span>
                    <span className="price">{price}</span>
                </div>
                <div className="price-container small">
                    <span className="currency prev-price">N</span>
                    <span className="prev-price line-strike">{prevPrice}</span>
                </div>
                <button
                    className="btn btn-wide"
                    onClick={() => removeFromCart(id)}
                >
                    <MdOutlineAddShoppingCart className="add-cart-icon" />
                    <span>Remove from Cart</span>
                </button>
            </div>
            
        </div>
    );
}

export default CartItems;
