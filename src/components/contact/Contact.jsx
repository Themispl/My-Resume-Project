import React from "react"; 
import './Contact.css';
import {MdOutlineMailOutline} from 'react-icons/md'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact= () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qlja7cg', 'service_qlja7cg', form.current, '1zvIJPuF-YgS7fCOl')
        e.target.reset()
    };    
    return(
        <section id="Contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <MdOutlineMailOutline className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>themis.pilarinos@gmail.com</h5>
                        <a href="mailto:themis.pilarinos@gmail.com" target="_blank">Send a Message</a>
                    </article>
                    <article className="contact_option">
                        <AiOutlineWhatsApp className="contact_option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+306978861413</h5>
                        <a href="https://api.whatsapp.com/send?phone=306978861413" target="_blank">Send a Message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required/>
                    <textarea name="message" rows="7" placeholder="Your Message" required/>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact