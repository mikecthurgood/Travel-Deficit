import React from 'react'
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const SecondaryNav = (props) => (

    < div className='secondary-nav' >
        <div className='nav-add-country'>
            <NavLink
                className='secondary-nav-link'
                to="/add-country"
                exact
            // activeStyle={{
            //     color: 'gold'
            // }}
            ><h4>Country List</h4></NavLink> </div>
        <div className='nav-profile'>     <NavLink
            className='secondary-nav-link'
            to="/profile"
            exact
        // activeStyle={{
        //     color: 'gold'
        // }}
        ><h4>Profile</h4></NavLink></div>
        <div className='nav-recommendations'>     <NavLink
            className='secondary-nav-link'
            to="/recommendations"
            exact
        // activeStyle={{
        //     color: 'gold'
        // }}
        ><h4>Recommendations</h4></NavLink></div>
    </div >

)

// <div className='secondary-nav'>




export default SecondaryNav