import React from "react";
import img1 from '../assets/icons/Group 1000002515.svg';
import img2 from '../assets/icons/Group 1000002516.svg';
import img3 from '../assets/icons/Group 1000002518.svg';

const Box = (image, title, info) => {
    return (
        <div className="main">
            <img src={img1} />
            <div className="text-box">
                <h3>100K+</h3>
                <p>AI model submission</p>
            </div>
        </div>
    )
}

export default Box;