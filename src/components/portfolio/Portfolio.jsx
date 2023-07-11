import React from "react"; 
import './Portfolio.css';
import IMG1 from '../../assets/login.png'
import IMG2 from '../../assets/culc.png'
import IMG3 from '../../assets/dice.png'
import IMG4 from '../../assets/cv.png'
import { Pagination} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data=[
    {
        id:1,
        image:IMG1,
        title:'Login Page',
        github:'https://github.com/Themispl',
        demo:'https://github.com/Themispl/loginpage',
    },
    {
        id:2,
        image:IMG2,
        title:'Calculator',
        github:'https://github.com/Themispl',
        demo:'https://github.com/Themispl/calculator',
    },
    {
        id:3,
        image:IMG3,
        title:'Dice',
        github:'https://github.com/Themispl',
        demo:'https://github.com/Themispl/Dice',
    },
    {
        id:4,
        image:IMG4,
        title:'My Resume',
        github:'https://github.com/Themispl',
        demo:'https://themispl.github.io/My-Resume-Project/',
    },
]

const Portfolio= () =>{
    return(
     <section id="Portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <Swiper className="container portfolio_container"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        >
         {
            data.map(({id, image, title, github, demo})=>{
                return(
                    <SwiperSlide key={id} className="portfolio_item">
                <div className="portfolio_item-image"></div>
                 <img src={image} alt={title}/>
                <h3>{title}</h3>
                <div className="portfolio_item-cta">
                <a href={github} className="btn"target="_blank">Github</a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
            </SwiperSlide>
                )
            })      
         }
        </Swiper>
     </section>
    )
}

export default Portfolio