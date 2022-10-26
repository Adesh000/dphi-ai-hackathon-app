import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/icons/logo.svg';
import community from '../assets/icons/Vector.svg';
import idCard from '../assets/icons/IdentificationCard.svg';
import uploaadImg from '../assets/icons/bxs_cloud-upload.svg';
import calenderImg from '../assets/icons/uil_calender.svg';
import notebook from '../assets/icons/carbon_notebook-reference.svg';
import skillLevel from '../assets/icons/carbon_skill-level-basic.svg';


const Navbar = () => {
    return (
        <div className="bg-light p-3">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Navbar;