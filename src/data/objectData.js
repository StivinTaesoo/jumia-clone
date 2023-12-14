import { LuApple, LuShirt, LuBaby, LuGamepad2 } from "react-icons/lu";
import { BiHealth } from "react-icons/bi";
import { GrHomeRounded } from "react-icons/gr";
import { GiSmartphone, GiSportMedal } from "react-icons/gi";
import {
    HiOutlineDesktopComputer,
    HiOutlineDotsCircleHorizontal,
} from "react-icons/hi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { BsTruckFront } from "react-icons/bs";

export const Category = [
    { id: 1, imgSrc: <LuApple />, title: "Supermarket" },
    { id: 2, imgSrc: <BiHealth />, title: "Health & Beauty" },
    { id: 3, imgSrc: <GrHomeRounded />, title: "Computing" },
    { id: 4, imgSrc: <GiSmartphone />, title: "Phones & Tables" },
    { id: 5, imgSrc: <HiOutlineDesktopComputer />, title: "Computing" },
    { id: 6, imgSrc: <AiOutlineFundProjectionScreen />, title: "Electronics" },
    { id: 7, imgSrc: <LuShirt />, title: "Fashion" },
    { id: 8, imgSrc: <LuBaby />, title: "Baby Products" },
    { id: 9, imgSrc: <LuGamepad2 />, title: "Gaming" },
    { id: 10, imgSrc: <GiSportMedal />, title: "Sporting Goods" },
    { id: 11, imgSrc: <BsTruckFront />, title: "Automobile" },
    {
        id: 12,
        imgSrc: <HiOutlineDotsCircleHorizontal />,
        title: "Other Categories",
    },
    // { id: 13, imgSrc: <LiveTvOutlined />, title: "Electronics" },
];
