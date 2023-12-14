import React, { useEffect } from "react";
import {
    MdOutlineShoppingCart,
    MdFavoriteBorder,
    MdStars,
    MdMenu,
} from "react-icons/md";
import { RiAccountCircleLine } from "react-icons/ri";
import { BiHelpCircle, BiSearchAlt2 } from "react-icons/bi";
import { BsBox2Heart, BsChatLeftDots } from "react-icons/bs";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

function Header() {
    useEffect(() => {
        const menuItemsDropdown = document.querySelectorAll(
            ".menu-items-dropdown"
        );
        menuItemsDropdown.forEach((item) => {
            item.addEventListener("click", (event) => {
                const dropdownMenu = item.nextElementSibling;
                if (dropdownMenu) {
                    dropdownMenu.style.display = "block";
                }

                dropdownMenu.addEventListener("mouseleave", (event) => {
                    dropdownMenu.style.display = "none";
                });
            });
        });
    }, []);

    return (
        <div className="header">
            <div className="hamburger-menu"><MdMenu /></div>
            
            <div className="header__logo">
                <Link to="/">
                    <span className="jumia-logo">JUMIA</span>
                    <MdStars className="star-icon" />
                </Link>
            </div>
            <div className="header__search-bar">
                <BiSearchAlt2 className="search-icon" />
                <input
                    type="text"
                    placeholder="Search products, brands and categories"
                ></input>
            </div>
            <button className="btn ml-4">search</button>
            <div className="header__menu flex-1">
                <div className="menu__items flex-1">
                    <div className="menu-items-dropdown flex-1">
                        <RiAccountCircleLine className="icons ml-4" />
                        <span className="text ml-4">Account</span>
                        <FiChevronDown className="ml-4" />
                    </div>

                    <div className="drop-down-menu">
                        <div className="btn-container">
                            <button className="btn sign-in">SIGN IN</button>
                        </div>

                        <hr />
                        <ul>
                            <li>
                                <RiAccountCircleLine className="icons" />
                                <span>My Account</span>
                            </li>
                            <li>
                                <BsBox2Heart className="icons" />
                                <span>Orders</span>
                            </li>
                            <li>
                                <MdFavoriteBorder className="icons" />
                                <span>Saved Items</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="menu__items flex-1">
                    <div className="menu-items-dropdown flex-1">
                        <BiHelpCircle className="icons" />
                        <span className="text ml-4">Help</span>
                        <FiChevronDown className="ml-4" />
                    </div>

                    <div className="drop-down-menu drop-down-menu-2">
                        <ul>
                            <li>
                                <span>Help Center</span>
                            </li>
                            <li>
                                <span>Place & track order</span>
                            </li>
                            <li>
                                <span>Order cancellation</span>
                            </li>
                            <li>
                                <span>Returns & Refunds</span>
                            </li>
                            <li>
                                <span>Payment & Jumia account</span>
                            </li>
                        </ul>
                        <hr />
                        <div className="btn-container">
                            <button className="btn sign-in flex-1">
                                <BsChatLeftDots className="icons" />
                                <span className="ml-10">LIVE CHAT</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="menu__items flex-1">
                    <Link to="/cart">
                        {" "}
                        <div className=" flex-1">
                            <MdOutlineShoppingCart className="icons" />
                            <span className="text ">Cart </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
