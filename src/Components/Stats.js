
import React from "react";
import img1 from '../assets/icons/Group 1000002515.svg';
import img2 from '../assets/icons/Group 1000002516.svg';
import img3 from '../assets/icons/Group 1000002518.svg';
import Box from './Box';
import '../Styles/Stats.css';


const Stats = () => {
    return (
        <div className="boxes">
            <Box image={img1} title="100K+" info="AI model submitted"/>
            <div className="saperator"></div>
            <Box image={img2} title="50K+" info="Data Scientists"/>
            <div className="saperator"></div>
            <Box image={img3} title="100+" info="AI Challenges hosted" />
        </div>
    )
}

export default Stats;