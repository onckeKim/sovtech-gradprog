import React from 'react';
import "./Body.css"


const Body = () => {
    return(
        <div>
                <section id="home">
                    <div className="avatar-container">
                        <img src="avatar.jpg" alt="Kim Oncke" className="avatar" />
                    </div>
                    <div className="greeting-container">
                        <h1 className="greeting-container__header"> Welcome! I'm Kim Oncke.</h1>
                        <p className='greeting-container__intro'> 
                            I am a final Bcom Management Sciences student with Information Systems Management  & Business Analytics as majors. <br />
                            I consider myself to be a very active  indiviual apart from academics I am involved in two different <br /> sporting activities, namely softball & netball. I believe having a balanced lifestyle allows one to stay level headed & maintain a healthy mental and physical health. <br /> I enjoy the process of learning new things and gaining knowledge as it allows one to grow as an individual. This ties into my reasoning for wanting to join Sovtech. I believe Sovtech is an instuition which incourages and promotes growth & I therefore believe this would be a great opportunity for me to start off my career. <br /> I am ready to learn from the company & become a great asset to the company. <br/> 
                            I appreciate the opportunity to present myself and look forward to working with you. 
                        </p>
            </div>
        </section>
            
            
        </div>
    )
}

export default Body;