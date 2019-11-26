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
            <div className='leaderboard'>
                <Card className='leaderboard-card'>
                    <Card.Header>
                        Leaderboard
                </Card.Header>
                    <Card.Content >
                        <div className='leaderboard'>
                            <div className='leaderboard-item'>
                                <span className='username-heading'><strong>Username</strong></span>
                                <span className='ranking-score-heading'><strong>Travel Deficit</strong></span>
                            </div>
                            <div className='leaderboard-item'>
                                <img className='profile-image' src={require('../Assets/default-avatar.png')} alt='user 1 image' />
                                <span className='username'>Bob Fleming</span>
                                <span className='ranking-score'>+28</span>
                            </div>
                            {/* <hr className='break' /> */}
                            <div className='leaderboard-item'>
                                <img className='profile-image' src={userImage} alt={`${userName} image`} />
                                <span className='username'>{userName}</span>
                                <span className='ranking-score'>{visitedCountries.length - userAge}</span>
                            </div>
                            {/* <hr className='break' /> */}
                            <div className='leaderboard-item'>
                                <img className='profile-image' src={require('../Assets/default-avatar.png')} alt='user 3 image' />
                                <span className='username'>Steve Rogers</span>
                                <span className='ranking-score'>-18</span>
                            </div>
                            {/* <hr className='break' /> */}
                            <div className='leaderboard-item'>
                                <img className='profile-image' src={require('../Assets/default-avatar.png')} alt='user 4 image' />
                                <span className='username'>Tony Stark</span>
                                <span className='ranking-score'>-23</span>
                            </div>
                            {/* <hr className='break' /> */}
                            <div className='leaderboard-item'>
                                <img className='profile-image' src={require('../Assets/default-avatar.png')} alt='user 5 image' />
                                <span className='username'>Wanda Maximov</span>
                                <span className='ranking-score'>-44</span>
                            </div>
                        </div>
                    </Card.Content>
                </Card>
            </div>
        </div>
    )
}

export default UserInfo