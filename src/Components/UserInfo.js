import React from 'react'
import { Card, Button } from 'semantic-ui-react'
import './Profile.css';


const UserInfo = ({ countries, visitedCountries, userName, userAge, badges, userImage }) => {

    const filteredCountries = countries.length > 0 && countries.filter(country => visitedCountries.includes(country.code)).sort((a, b) => a.name.localeCompare(b.name))
    const continents = filteredCountries.length > 0 && [...new Set(filteredCountries.map(country => country.continent))].sort()

    return (
        <div className='user-container'>
            <div className='user-info'>
                <Card>
                    <Card.Header>
                        Details
            </Card.Header>
                    <Card.Content >
                        <div className='user-details'>
                            <p><strong>Username</strong>: {userName}</p>
                            <p><strong>Age</strong>: {userAge ? <span> {userAge} <button color={'blue'}>Update</button></span> : <Button color={'blue'}>Add Age</Button>}</p>
                            <p><strong>Travel Deficit</strong>: {userAge ? <span> {visitedCountries.length - userAge} </span> : <span><em>Add age to calculate</em></span>}</p>
                            <p><strong>Countries Visited</strong>: {visitedCountries.length}</p>
                            <p><strong>Continents Visited</strong>: {continents.length}</p>
                            <p><strong>Badges Earned</strong>: {badges && badges.length > 0 ? badges.length : <span>No badges earned yet</span>}</p>
                        </div>
                    </Card.Content>
                </Card>
            </div>
            <div className='user-details'></div>

        </div>
    )
}

export default UserInfo