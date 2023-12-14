import React from "react";
import { MobileMenuItem } from "./MobileMenuItem";
import { MdOutlineHome } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { BiHelpCircle, BiWifi } from "react-icons/bi";
import { RiAccountCircleLine } from "react-icons/ri";

function MobileMenu() {
    return (
        <div className="MobileMenu">
            <MobileMenuItem icon={<MdOutlineHome />} text={"Home"} />
            <MobileMenuItem icon={<AiOutlineProfile />} text={"Category"} />
            <MobileMenuItem icon={<BiWifi />} text={"Feed"} />
            <MobileMenuItem icon={<RiAccountCircleLine />} text={"Account"} />
            <MobileMenuItem icon={<BiHelpCircle />} text={"Help"} />
        </div>
    );
}

export default MobileMenu;
