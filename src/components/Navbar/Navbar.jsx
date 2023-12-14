import React from "react";
import "./Navbar.css";
import gifHeader from "../../assets/banners/heading.gif";
import Header from "./Header";
import { MdStars } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { GiWineBottle } from "react-icons/gi";
import { CiBadgeDollar } from "react-icons/ci";

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar__gif">
                <div className="navbar__gif-space-box"></div>
                <img src={gifHeader} alt="Gif" />
                <div className="navbar__gif-space-box"></div>
            </div>
            <div className="navbar__menu-bar">
                <div className="menu-bar__sell-on-jumia flex-1">
                    <MdStars className="star-icon medium" />
                    <span className="ml-4 orange fw-6">Sell on Jumia</span>
                </div>
                <div className="menu-bar__menu-items">
                    <div className="flex-1">
                        <strong>JUMIA</strong>
                        <MdStars className="star-icon small" />
                    </div>
                    <div className="menu-items flex-1">
                        <MdSecurity />
                        <span className="ml-2">PAY</span>
                    </div>
                    <div className="menu-items flex-1">
                        <MdOutlineFastfood />
                        <span className="ml-2">FOOD</span>
                    </div>
                    <div className="menu-items flex-1">
                        <GiWineBottle />
                        <span className="ml-2">PARTY</span>
                    </div>
                    <div className="menu-items flex-1">
                        <CiBadgeDollar />
                        <span className="ml-2">LOGISTICS</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
