import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';



const NavBar = (props) => (
    <div className='navbar'>
        {props.username ?
            <span><NavLink to="/" exact><img id='main-logo' src={(require('../Assets/TD-logo.png'))} alt="" /></NavLink></span>
            :
            <span><img id='main-logo' src={(require('../Assets/TD-logo.png'))} alt="" /></span>
        }
        <span className='profile-data'>{props.userImage && <img src={props.userImage} alt="profile" className='profile-picture' />}</span>
    </div>
)



export default NavBar