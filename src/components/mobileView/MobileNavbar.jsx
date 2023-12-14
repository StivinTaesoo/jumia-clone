import React from "react";
import "./MobileNavbar.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";

function MobileNavbar() {
    return (
        <div className="MobileNavbar">
            <div className="mobile-search-bar">
                <BiSearchAlt2 className="search-icon" />
                <input type="text" placeholder="Search "></input>
            </div>
            <div className="mobile-shopping-cart">
                <MdOutlineShoppingCart style={{ fontSize: "24px" }} />
            </div>
        </div>
    );
}

export default MobileNavbar;
