import React from "react"; 
import './Footer.css';
import {BsLinkedin} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
const Footer= () =>{
    return(
        <footer>
            <a href="#" className="footer_logo">Themis</a>
            <ul className="parmalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Experience">Experience</a></li>
                <li><a href="#Portfolio">portfolio</a></li>
                <li><a href="#Contact">Contact</a></li>
            </ul>
            <div className="footr_socials">
            <a href="https://www.linkedin.com/in/efthimios-pilarinos-67aa31227" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Themispl" target="_blank"><BsGithub/></a>
            <a href="https://www.facebook.com" target="_blank"><FaFacebookF/></a>
            </div>
            <div className="footer_copyright">
                <small>&copy; Efthimios Pilarinos. All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer