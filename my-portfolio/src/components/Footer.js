import React from 'react'
import './Footer.css'
import { CgCopyright } from 'react-icons/cg'
import { FiPhone, FiMail } from 'react-icons/fi'
const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left"><CgCopyright /> Copyright {currentYear}. All rights reserved.</div>
                <div className="footer-right">
                    <span className="footer-name">Sahil Dhillon</span>
                    <span className="footer-address">Sonipat, India 131001</span>
                    <span className="footer-email"><FiMail style={{ marginRight: "5px" }} /> zsahildhillon@protonmail.com</span>
                    <span className="footer-phone"><FiPhone style={{ marginRight: "5px" }} /> +91-70825-99140</span>
                </div>
            </div>
        </footer>
    )
}
export default Footer