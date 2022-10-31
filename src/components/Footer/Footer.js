import React from 'react';
import './Footer.css';
import {
    AiOutlineMail,
    AiFillLinkedin,
    AiFillGithub,
  } from "react-icons/ai";

const Footer = () => {
    return(
        <div>
                <nav className="footer">
                    <div className="footer-logo">
                        <table className = "contacts">
                            <tr>
                                <td> <p className = "twitter-logo"><a href="mailto:
                                    onckekim@gmail.com"><AiOutlineMail /></a></p></td>
                                <td><AiFillLinkedin />  <p className = "logo-name"> Kim Oncke</p>   </td>
                                <td><AiFillGithub />    <p className = "logo-name"> onckeKim</p> </td>
                            </tr>
                        </table>
                    </div>
                </nav>
        </div>
    )
}

export default Footer;