import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './Profile.css';
import ProfileVisited from './ProfileVisited'
import UserInfo from './UserInfo'
import AdBanner from './AdBanner'


const Profile = ({ countries, visitedCountries, userName, userAge, badges, userImage, bannerNumber }) => {

    const filteredCountries = countries.length > 0 && countries.filter(country => visitedCountries.includes(country.code)).sort((a, b) => a.name.localeCompare(b.name))
    const continents = filteredCountries.length > 0 && [...new Set(filteredCountries.map(country => country.continent))].sort()

    return (

        <div className='profile-container'>
            <AdBanner />
            <UserInfo
                countries={countries}
                visitedCountries={visitedCountries}
                userName={userName}
                userAge={userAge}
                badges={badges}
                userImage={userImage}
            />
            <ProfileVisited
                countries={countries}
                visitedCountries={visitedCountries}
            />


        </div >

    )
}

export default Profile