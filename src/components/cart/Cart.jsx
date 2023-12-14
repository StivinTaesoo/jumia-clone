import React from "react";
import { PRODUCTS } from "../../data/item";
import { useStateValue } from "../../context/StateProvider";
import CartItems from "./CartItems";
import Header from "../Navbar/HeaderTwo";
import Footer from "../footer/Footer";

function Cart() {
    const { cartItems } = useStateValue();
    return (
        <>
            <Header />
            <div className="cart">
                <div className="cart__container">
                    <div className="cart-left-container">
                        {PRODUCTS.map((item) => {
                            if (cartItems[item.id] !== 0) {
                                return (
                                    <>
                                        <CartItems data={item} /> <hr></hr>
                                    </>
                                );
                            }
                        })}
                    </div>
                    <div className="cart-right"></div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
