import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider({ data }) {
    const [curSlide, setCurSlide] = useState(0);
    let slideLen = data.length;

    // Auto Slide Variables
    const autoSlide = true;
    let curSlideInterval;
    let timeInterval = 5000;

    const prev = () => {
        setCurSlide(curSlide === 0 ? slideLen - 1 : curSlide - 1);
    };
    const next = () => {
        setCurSlide(curSlide === slideLen - 1 ? 0 : curSlide + 1);
    };

    function autoScroll() {
        curSlideInterval = setInterval(next, timeInterval);
    }

    useEffect(() => {
        setCurSlide(0);
    }, []);

    useEffect(() => {
        if (autoSlide) {
            autoScroll();
        }
        return () => clearInterval(curSlideInterval);
    }, [curSlide]);

    return (
        <div className="carousel">
            {/* <div className="arrow prev" onClick={prev}>
                &larr;
            </div>

            <div className="arrow next" onClick={next}>
                &rarr;
            </div> */}

            {data.map((item, idx) => {
                return (
                    <img
                        src={item.url}
                        alt={item.alt}
                        key={idx}
                        className={
                            curSlide === idx ? "clips" : "clips clips-hidden"
                        }
                    />
                );
            })}
            <div className="indicators">
                {data.map((_, idx) => {
                    return (
                        <button
                            className={
                                curSlide === idx
                                    ? "indicator indicator-active"
                                    : "indicator"
                            }
                            onClick={() => setCurSlide(idx)}
                        ></button>
                    );
                })}
            </div>
        </div>
    );
}

export default Slider;
