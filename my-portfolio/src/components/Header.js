import React from 'react'
import './Header.css'
// import logo from '../images/zsahildhillon.png'
import { FaInstagramSquare, FaLinkedin, FaGithubSquare, FaWhatsappSquare } from 'react-icons/fa'
const NavBar = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date();
    const month = monthNames[dateObj.getMonth()];
    const day = String(dateObj.getDate()).padStart(2, '0');
    const year = dateObj.getFullYear();
    const output = month + '\n' + day + ',' + year;
    return (
        <header>
            <div className="header-container">
                {/* <img src={logo} className="nav-logo" /> */}
                <span className="nav-logo" >Sahil Dhillon</span>
                <nav>
                    <ul>
                        <li><a href="https://www.instagram.com/zsahildhillon/" target="_blank" rel="noreferrer"><FaInstagramSquare className="social-icons" /></a></li>
                        <li><a href="https://www.linkedin.com/in/zsahildhillon/" target="_blank" rel="noreferrer"><FaLinkedin className="social-icons" /></a></li>
                        <li><a href="https://github.com/Sahil-Dhillon" target="_blank" rel="noreferrer"><FaGithubSquare className="social-icons" /></a></li>
                        <li><a href="https://wa.me/917082599140" target="_blank" rel="noreferrer"><FaWhatsappSquare className="social-icons" /></a></li>
                    </ul>
                </nav>
            </div>
            <span className="header-status">
                <span>Web Developer</span>
                •
                <span className="date">{output}</span>
                •
                <span>Available to work</span>
            </span>
        </header>
    )
}
export default NavBar