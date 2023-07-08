import React from "react";
import {BsLinkedin} from 'react-icons/bs' 
import {BsGithub} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'

const HeaderSocials= () =>{
    return(
        <div className="Header_Socials">
            <a href="https://www.linkedin.com/in/efthimios-pilarinos-67aa31227" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com/Themispl" target="_blank"><BsGithub/></a>
            <a href="https://www.facebook.com" target="_blank"><FaFacebookF/></a>
        </div>
    )
}

export default HeaderSocials