import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import "./MyNavbar.css";

export const MyNavbar = () => {
    return ( 
    <nav>
        <Link to='/' className='title'>NK</Link>
        <ul style={{ listStyleType: 'none' }}>
            <li><a href="https://www.linkedin.com/in/neha-kandula-104076264/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><NavLink to="/Projects">Projects</NavLink></li>
            <li><NavLink to="/Experience">Experience</NavLink></li>
            
        </ul>
    </nav>
    );
};