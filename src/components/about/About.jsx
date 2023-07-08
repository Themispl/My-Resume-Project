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
                            <small>Entry Level</small>
                        </article>
                        <article className="about_card">
                            <FiUsers className="about_icon"/>
                            <h5>Work Experience</h5>
                            <small>Entry Level</small>
                        </article>
                        <article className="about_card">
                            <LuFolderEdit className="about_icon"/>
                            <h5>Projects</h5>
                            <small></small>
                        </article>
                    </div>

                    <p>
                    While I may not possess a formal degree, I have been actively engaged in expanding my knowledge through online courses, tutorials, and practical projects. This self directed learning approach has allowed me to develop a solid foundation in HTML, CSS, JavaScript, angular and other essential web technologies. Furthermore, I have gained handson experience in building responsive and user on various personal projects. What sets me apart is my dedication to staying uptofriendly websites by collaborating date with the latest trends and best practices in front end development. I possess strong communication and interpersonal skills, which allow me to effectively collaborate with cross-functional teams. My experience working in team environments has honed my ability to actively listen, adapt to diverse perspectives, and contribute constructively to discussions. Additionally, I have demonstrated leadership qualities by ta king initiative, coordinating tasks, and motivating team members to deliver projects. These skills, combined with my technical expertise, enable me to not only meet project requirements but also foster a positive and productive work atmosphere.
                    </p>

                    <a href="#Contact" className="btn btn-primary">Let's Talk</a>
                </div>
            </div>
        </section>
    )
}

export default About