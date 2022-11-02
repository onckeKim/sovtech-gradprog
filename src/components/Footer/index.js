import React from 'react';
import {
    AiFillGithub, AiFillLinkedin, AiOutlineMail
} from "react-icons/ai";
import './Footer.css';

const STATIC_LINKS = [{
    name: 'Mail',
    icon: <AiOutlineMail color='inherit'/>,
    link: "mailto:onckekim@gmail.com"
},
{
    name: 'Linkedin',
    icon: <AiFillLinkedin color='inherit' />,
    link: 'https://linkedin.com/in/kim-oncke-791a941a6'
}, 
{
    name: 'Github',
    icon: <AiFillGithub color='inherit' />,
    link: 'https://github.com/onckekim'
}]

export const Footer = () => {
    return(
                <footer className="footer">
                    <ul>
                       {/*eslint-disable-next-line*/}
                        {STATIC_LINKS.map(staticLink => <li key={staticLink.name}>{staticLink.icon}<a  href={staticLink.link} target='_blank'>{staticLink.name}</a></li>)}
                    </ul>
                </footer>
    )
}
