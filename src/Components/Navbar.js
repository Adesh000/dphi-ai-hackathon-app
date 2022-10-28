import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/icons/logo.svg';
import calenderImg from '../assets/icons/uil_calender.svg';
import skillLevel from '../assets/icons/carbon_skill-level-basic.svg';


const Navbar = () => {
    return (
        <div className="bg-body p-3 ps-5">
            <img src={logo} alt="logo"/>
        </div>
    )
}

export default Navbar;