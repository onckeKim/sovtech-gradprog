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
                <strong>Who am I ?</strong> <br/>I am a final year Bcom Management Sciences student majoring in Information Systems Management  & Business Analytics at the University of Stellenbosch. I consider myself to be a very active  indiviual apart from academics I am involved in two different sporting activities, namely softball & netball. I enjoy these sporting activites because they are team sports and they allow me to met new people and improves my ability to work well within a team. I believe having a balanced lifestyle allows one to stay level headed & maintain good mental and physical health. I enjoy the process of learning new things as it allows one to grow as an individual. I am someonne who uses failure as an opportunity to learn and those lessons carry me to ensure that the failure willingness become success. <br />
                <br/><strong>Why Sovetch ?</strong> <br/> I believe Sovtech is an instuition which incourages and promotes growth & I therefore believe this would be a great opportunity for me to start off my career.I strongly relate to the values Sovetch deem important & this contributes to my willingness to be apart of this prestigious instituition. S of these values are #Adapt as it compliments well with growth, wth adapting we learn to do things differently. This also ties in well with development as new technologies are constantly being developed and implemented and e have to learn to adapt to these new methods to get the job done more sufficiently. <br /> I am ready to learn from the company & become a great asset to the company.
                I appreciate the opportunity to present myself and look forward to working with you. <br/>
                <br/>
                <strong>Why Me ?</strong> <br/>
                A very simple answer to this is that, I never give up. I simply love being challenged, I love proving and improving myself. Considering these factors I know that I would be a great addition to the team. These qualities result in me working hard to ensure that the job is done on time and done well. 
            </p>
            </div>
        </div>
    )
}