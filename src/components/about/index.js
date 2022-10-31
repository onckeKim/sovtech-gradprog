import React from 'react'
import { Avatar } from '../avatar'
import './about.css'

export const About = () => {
    return (
        <div className='about'>
            <Avatar/>
            <div className="about_text">
            <h1 className="about_text-header"> Welcome! I'm Kim Oncke.</h1>
            <p className='about_text-intro'> 
                I am a final Bcom Management Sciences student with Information Systems Management  & Business Analytics as majors. <br />
                I consider myself to be a very active  indiviual apart from academics I am involved in two different <br /> sporting activities, namely softball & netball. I believe having a balanced lifestyle allows one to stay level headed & maintain a healthy mental and physical health. <br /> I enjoy the process of learning new things and gaining knowledge as it allows one to grow as an individual. This ties into my reasoning for wanting to join Sovtech. I believe Sovtech is an instuition which incourages and promotes growth & I therefore believe this would be a great opportunity for me to start off my career. <br /> I am ready to learn from the company & become a great asset to the company. <br/> 
                I appreciate the opportunity to present myself and look forward to working with you. 
            </p>
            </div>
        </div>
    )
}