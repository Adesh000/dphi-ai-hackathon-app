import React from "react";
import '../Styles/Box.css';

const Box = (props) => {
    return (
        <div className="main">
            <img src={props.image} />
            <div className="text-box">
                <h3>{props.title}</h3>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default Box;