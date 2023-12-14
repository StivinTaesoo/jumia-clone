import React, { useEffect, useState } from "react";
import "./BackToTopBtn.css";
import { LuChevronUp } from "react-icons/lu";

function BackToTopBtn() {
    const [backToTopBtn, setBackToTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.screenY > 100) {
                setBackToTopBtn(true);
            } else {
                setBackToTopBtn(false);
            }
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: "auto" });
    };
    return (
        <div>
            <button className="scroll-up" onClick={scrollUp}>
                <LuChevronUp />
            </button>
        </div>
    );
}

export default BackToTopBtn;
