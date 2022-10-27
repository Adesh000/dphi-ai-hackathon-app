import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import idCard from '../assets/icons/IdentificationCard.svg';
import notebook from '../assets/icons/carbon_notebook-reference.svg';
import community from '../assets/icons/Vector.svg';
import robot from '../assets/icons/Robot.svg';
import FeatureCard from "./FeatureCard";


const cardStyle = {
    padding: "20px 100px",
    display: "flex",
    flexWrap: "wrap",
    position: "relative",
    left: "20px"
}
const Features = () => {
    return (
        <div className="bg-body pb-5">
            <h2 className="text-center my-5">Why Participate in <span className="text-success">AI Challenges?</span></h2>
            <div style={cardStyle}>
                <FeatureCard image={notebook} title="Proove your skills" desc="Gain  substanstial experience by solving real world problems and pit against others to come up with innovative solutions" />
                <FeatureCard image={community} title="Learn from community" desc="One can look and analyze the solutions submitted by the other Data Scientist in the community and learn from them" />
                <FeatureCard image={robot} title="Challenge yourself" desc="There is nothing for you to loose by participating in a challenge. You can fail safe, learn out of the entire experience and bounce back harder" />
                <FeatureCard image={idCard} title="Earn recognition" desc="You will stand out from the crowd if you do well in AI challenges, it not only helps you shine in the community but also earns rewards." />
            </div>
        </div>
    )
}

export default Features;