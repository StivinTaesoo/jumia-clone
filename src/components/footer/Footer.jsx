import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { MdStars } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { DiApple } from "react-icons/di";
import { BsGooglePlay } from "react-icons/bs";
import FooterMenuItems from "./FooterMenuItems";

function Footer() {
    return (
        <div className="footer">
            <div className="footer__top-section">
                <div className="footer__logo">
                    <Link to="/">
                        <span className="jumia-logo">JUMIA</span>
                        <MdStars className="star-icon" />
                    </Link>
                </div>
                <div className="footer__subscription">
                    <div className="new-to-jumia">
                        <h5>NEW TO JUMIA?</h5>
                        <p>
                            Subscribe to our newsletter to get updates on our
                            latest offers!
                        </p>
                        <div className="subscription-btns">
                            <div className="email-input">
                                <MdMail className="email" />
                                <input
                                    type="text"
                                    placeholder="Enter E-mail Address"
                                />
                            </div>
                            <div className="gender-btns">MALE</div>
                            <div className="gender-btns">FEMALE</div>
                        </div>
                    </div>
                </div>
                <div className="jumia-download">
                    <div className="download-container">
                        <div className="star-logo-container">
                            <MdStars className="star-logo" />
                        </div>

                        <div className="download-text">
                            <h5>DOWNLOAD JUMIA FREE APP</h5>
                            <p>Get access to exclusive offers!</p>
                        </div>
                    </div>
                    <div className="download-links">
                        <div className="download-links-container">
                            <div className="download-links-border">
                                <DiApple className="playstore-logo" />
                                <div className="download-links-text">
                                    <small>Download on the</small>
                                    <h5>App Store</h5>
                                </div>
                            </div>
                            <div className="download-links-border">
                                <BsGooglePlay className="playstore-logo" />
                                <div className="download-links-text">
                                    <small>GET IT ON</small>
                                    <h6>Play Store</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterMenuItems />
            <div className="black-space"></div>
        </div>
    );
}

export default Footer;
