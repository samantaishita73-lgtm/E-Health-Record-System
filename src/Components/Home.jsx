import React from "react";
import Menulist from './Menu';
import Slider from './Slider';
import Homedesign from "./Homedesign";
import Homedesign2 from "./Homedesign2";
import Homedesign3 from "./Homedesign3";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <>
            <Menulist/>
            <Slider/>
            <Homedesign/>
            <Homedesign2/>
            <Homedesign3/>
            <Footer/>
            
        </>
    );
};

export default Homepage;