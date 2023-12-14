import React from "react";
import "./HeroSection.css";
import Right1 from "../../assets/banners/JA-live-now-Countdown.gif";
import Right2 from "../../assets/banners/right2.PNG";
import Slider from "./Slider";
import { sliderData } from "../../data/sliderData";
import { Category } from "../../data/objectData";
function HeroSection() {
    return (
        <div className="Hero__container">
            <div className="Hero__container--items">
                {Category &&
                    Category.map((items) => (
                        <div className="flex space-margin" key={items.id}>
                            <span className="items-icons">{items.imgSrc}</span>
                            <span className="items-title">{items.title}</span>
                        </div>
                    ))}
            </div>
            <div className="Hero__container-carousel">
                <Slider data={sliderData} />
            </div>
            <div className="Hero__container-right">
                <div className="right-container-img">
                    <img src={Right1} alt="Right" />
                </div>
                <div className="right-container-img">
                    <img src={Right2} alt="Right" />
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
