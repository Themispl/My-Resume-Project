import React from "react"; 
import './About.css';
import ME from '../../assets/Themis.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {LuFolderEdit} from 'react-icons/lu'
const About= () =>{
    return(
        <section id="About">
            <h5>Get To Know</h5>
            <h2>Themis</h2>

            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={ME} alt=""/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">
                        <article className="about_card">
                            <FaAward className="about_icon"/>
                            <h5>Experience</h5>
                            <small>Junior Level</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Work Experience</h5>
                            <small>Junior Level</small>
                        </article>
                        <article className="about_card">
                            <LuFolderEdit className="about_icon"/>
                            <h5>Projects</h5>
                            <small></small>
                        </article>
                    </div>

                    <p>
                    I have actively pursued expanding my knowledge through online courses, certificates, and hands-on projects. This self-directed learning has enabled me to build a  foundation in HTML, CSS, JavaScript, Angular, and other critical web technologies as well in the back-end with Java tecnologies .  My commitment to keeping abreast of the latest trends and best practices in front-end development sets me apart. I have strong communication and interpersonal skills, which facilitate effective collaboration with cross-functional teams. Working in team settings has refined my abilities to listen actively, embrace diverse viewpoints, and contribute positively to discussions. I have also exhibited leadership by taking initiative, coordinating tasks, and inspiring team members to achieve project goals. These competencies, along with my technical acumen, empower me to fulfill project demands and foster a positive, productive work environment.  
                    </p>

                    <a href="#Contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About