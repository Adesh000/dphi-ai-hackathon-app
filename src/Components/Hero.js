import React from "react";
import { Button } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import plane from '../assets/icons/PicsArt_04-14-04.42 1.svg';
import '../Styles/Hero.css';

const Hero = () => {
    return (
        <div className="container">
            <div className="text">
                <div className="v-line"></div>
                <div className="content">
                    <h2>Accelerate Innovation with Global AI Challenges</h2>
                    <p>AI Challenges at Dphi simulate real world problems. It is a grate place to put yor AI/Date Science skills to test on diverse datasets allowing you to foster learning through competitions.</p>
                    <Button color="success" size="lg">Creat Challenge</Button>
                </div>
            </div>
            <div className="image">
                <img src={plane} alt="hero_image" />
            </div>
        </div>
    )
}

export default Hero;