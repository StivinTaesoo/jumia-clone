import React from "react";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { SiYoutube, SiMastercard, SiVisa, SiDhl } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { MdOutlineFastfood } from "react-icons/md";
import { GiWineBottle } from "react-icons/gi";
import { CiBadgeDollar } from "react-icons/ci";

function FooterMenuItems() {
    return (
        <div className="FooterMenuItems">
            <div className="footer-menu-container">
                <div className="menu-list">
                    <h5>NEED HELP?</h5>
                    <ul>
                        <li>Help Center</li>
                        <li>Contact Us</li>
                        <li>How to shop on Jumia</li>
                        <li>Delivery options and timelines</li>
                        <li>How to return a product on Jumia</li>
                        <li>Corporate and bulk purchases</li>
                        <li>Report a product</li>
                        <li>Ship package anywhere in Nigeria</li>
                        <li>Dispute Resolution Policy</li>
                        <li>Returns and Refunds Policy</li>
                    </ul>
                </div>
                <div className="menu-list">
                    <h5>ABOUT JUMIA</h5>
                    <ul>
                        <li>About us</li>
                        <li>Jumia careers</li>
                        <li>Jumia express</li>
                        <li>Terms and conditions</li>
                        <li>Privacy notice</li>
                        <li>Jumia Store Credit Terms & Conditions</li>
                        <li>Jumia Payment Information Guidelines</li>
                        <li>Cookie Notice</li>
                        <li>Jumia Global</li>
                        <li>Official Stores</li>
                        <li>Flash Sales</li>
                        <li>Jumia Anniversay 2023</li>
                    </ul>
                </div>
                <div className="menu-list">
                    <h5>MAKE MONEY WITH JUMIA</h5>
                    <ul>
                        <li>Sell on Jumia</li>
                        <li>Become a sales consultant</li>
                        <li>Become a Logistics Services Partner</li>
                        <li>Join the Jumia DA Academy</li>
                        <li>Join the Jumia KOL Program</li>
                    </ul>
                </div>
                <div className="menu-list">
                    <h5>JUMIA INTERNATIONAL</h5>
                    <div>
                        <ul>
                            <li>Algeria</li>
                            <li>Egypt</li>
                            <li>Morrocco</li>
                            <li>Ghana</li>
                            <li>Kenya</li>
                        </ul>
                        <ul>
                            <li>Ivory Coast</li>
                            <li>Senegal</li>
                            <li>Tunisia</li>
                            <li>Uganda</li>
                            <li>Zando</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="jumia-media-handles">
                <div className="social-media-handles">
                    <h5>JOIN US ON</h5>
                    <div className="social-media-handles-container">
                        <ImFacebook />
                        <SiYoutube />
                        <ImInstagram />
                        <ImTwitter />
                    </div>
                </div>
                <div className="social-media-handles">
                    <h5>PAYMENT METHODS AND DELIVERY PARTNERS</h5>
                    <div className="social-media-handles-container">
                        <SiMastercard />
                        <SiVisa />

                        <SiDhl />
                    </div>
                </div>
            </div>
            <hr />
            <div className="footer-menu-bar">
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
    );
}

export default FooterMenuItems;
