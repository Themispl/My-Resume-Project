import React from "react"; 
import './Experience.css';
import {BsPatchCheckFill} from 'react-icons/bs'
const Experience= () =>{
    return(
        <section id="Experience">
            <h5>What Skill I Have</h5>
            <h2>My Experience</h2>

         <div className="container experience_container">
             <div className="experience_fontend">
                <h3>Frontend Development</h3>
                <div className="experience_content">
                     <article className="experience_details">
                        <BsPatchCheckFill className="experience_details-icon"/>
                        <div>
                            <h4>HTML</h4>
                            <small className="text-ligth">Experience</small>
                        </div>
                     </article>
                     <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>CSS</h4>
                            <small className="text-ligth">Experience</small>
                         </div>
                     </article>
                    <article className="experience_details">
                            <BsPatchCheckFill className="experience_details-icon"/>
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-ligth">Experience</small>
                         </div>
                     </article>
                     <article className="experience_details">
                         <BsPatchCheckFill className="experience_details-icon"/>
                          <div>
                            <h4>ReactJS</h4>
                            <small className="text-ligth">Experience</small>
                          </div>
                     </article>
                     <article className="experience_details">
                         <BsPatchCheckFill className="experience_details-icon"/>
                         <div>
                            <h4>Git</h4>
                            <small className="text-ligth">Experience</small>
                         </div>
                      </article>
                 </div>
                </div>
            <div className="experience_backend">
                <h3>Backend Development</h3>
                     <div className="experience_content">
                        <article className="experience_details">
                             <BsPatchCheckFill className="experience_details-icon"/>
                             <div></div><h4>Python</h4>
                             <small className="text-ligth">Experience</small>
                         </article>
                     </div>
             </div>
         </div>
        </section>
    )
}

export default Experience