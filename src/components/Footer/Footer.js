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
           <header className="footer">
                <nav className="navbar">
                    <div className="navbar-logo">
                        <table className = "contacts">
                            <tr>
                                <td><AiOutlineMail />   <p className = "logo-name"> onckekim@gmail.com</p></td>
                                <td><AiFillLinkedin />  <p className = "logo-name"> Kim Oncke</p>   </td>
                                <td><AiFillGithub />    <p className = "logo-name"> onckeKim</p> </td>
                            </tr>
                        </table>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Footer;