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
                <strong>Who am I ?</strong> <br/>I have completed my BCom Management Sciences Degree at the University of Stellenbosch in 2022, majoring in Information Systems Management & Business Analytics. I believe that besides academic achievements it is healthy to maintain a balanced lifestyle which encourages good mental and physical health. The sporting activities I enjoy the most are softball & netball, together with regular fitness and gym workouts. The team sports help develop teamwork and people skills, whereas the fitness and gym assist with personal challenge achievements. Meeting new people through sporting activities are beneficial with networking to create future business opportunities. Being teachable and open to learning is fundamental to my approach to life and work. Being in good health and strong state of mind allows me to tackle challenges more efficiently so that I may successfully pursue my goals. <br />
                <br/><strong>Why Sovetch ?</strong> <br/> Sovtech is one of the leading software design and development companies in Africa with a history of achieving prestigious awards in the IT/App industry. Even more impressive is the generosity of Sovtech in assisting upcoming app developers and entrepreneurs with Sovetch’s MTN Women in STEM Award Sponsorship. Being a woman, it is an absolute privilege to have the opportunity to work for Sovtech. The Graduate Programme offered by Sovtech is the perfect platform to achieve #Results for my career development. It is my ambition to become a senior full stack software developer and learning from the incredible team at Sovtech will help me #Adapt to the industry demands and the constant evolving new innovative technologies. With my work ethic and willingness to learn I believe that I will be an asset to Sovtech. <br/>
                <br/>
            </p>
            </div>
        </div>
    )
}