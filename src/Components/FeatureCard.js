import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const cardsStyle = {
    width: "600px",
    margin: "20px",
    padding: "20px 40px",
    borderRadius: "20px",
}
const FeatureCard = (props) => {
    return (
        <div style={cardsStyle} className="bg-light">
            <img src={props.image} />
            <h4 className="fw-bolder mt-3">{props.title}</h4>
            <p className="fs-6 fw-semibold ">{props.desc}</p>
        </div>
    )
}

export default FeatureCard;