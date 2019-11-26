import React from 'react'
// import { Card, Button } from 'semantic-ui-react'
import './Profile.css';
import ProfileMap from './ProfileMap'
import UserInfo from './UserInfo'
import AdBanner from './AdBanner'
import LeaderBoard from './LeaderBoard'
import ProfileVisited from './ProfileVisited'



const Profile = ({ countries, visitedCountries, userName, userAge, badges, userImage, bannerNumber }) => {

    const filteredCountries = countries.length > 0 && countries.filter(country => visitedCountries.includes(country.code)).sort((a, b) => a.name.localeCompare(b.name))
    // const continents = filteredCountries.length > 0 && [...new Set(filteredCountries.map(country => country.continent))].sort()

    return (

        <div className='profile-container'>
            {/* <AdBanner /> */}
            <div className='profile-row'>
                <div className='profile-row-item'>
                    <UserInfo
                        countries={countries}
                        visitedCountries={visitedCountries}
                        userName={userName}
                        userAge={userAge}
                        badges={badges}
                        userImage={userImage}
                    />
                </div>
                <div className='profile-row-item'>

                    <ProfileMap
                        countries={countries}
                        visitedCountries={visitedCountries}
                    />
                </div>

                <div className='profile-row-item'>

                    <LeaderBoard
                        countries={countries}
                        visitedCountries={visitedCountries}
                        userName={userName}
                        userAge={userAge}
                        // badges={badges}
                        userImage={userImage}
                    />
                </div>
            </div>

            <div className='profile-row-column'>
                <ProfileVisited
                    countries={countries}
                    visitedCountries={visitedCountries}
                />
            </div>



        </div >

    )
}

export default Profile