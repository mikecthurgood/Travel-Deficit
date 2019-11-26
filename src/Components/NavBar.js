import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';



const NavBar = (props) => (
    <div className='navbar'>
        <NavLink
            className='user-link'
            to="/"
            exact
            activeStyle={{
                color: 'gold'
            }}
        >Home</NavLink>
        <span><NavLink to="/" exact><img id='main-logo' src={(require('../Assets/TD-logo.png'))} alt="" /></NavLink></span>
        <span className='profile-data'>{props.userImage && <img src={props.userImage} alt="profile" className='profile-picture' />}</span>
        {props.userName && <div className='secondary-nav'>
            <div className='nav-add-country'><h2>Country List</h2></div>
            <div className='nav-profile'><h2>Profile</h2></div>
            <div className='nav-recommendations'>Recommendations</div>
        </div>}
    </div>
)



export default NavBar