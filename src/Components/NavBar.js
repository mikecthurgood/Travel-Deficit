import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';



const NavBar = (props) => (
    <div className='navbar'>
        <NavLink
            className='user-link'
            to="/add-country"
            exact
            activeStyle={{
                color: 'gold'
            }}
        >AddCountry</NavLink>
        <span><NavLink to="/" exact><img id='main-logo' src={(require('../Assets/TD-logo.png'))} alt="" /></NavLink></span>
        <span className='profile-data'>{props.userImage && <img src={props.userImage} alt="profile" className='profile-picture' />}</span>
    </div>
)



export default NavBar