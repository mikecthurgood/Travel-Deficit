import React from 'react'
import { Card } from 'semantic-ui-react'
import './Profile.css';


const ProfileVisited = ({ countries, visitedCountries }) => {

    const filteredCountries = countries.length > 0 && countries.filter(country => visitedCountries.includes(country.code)).sort((a, b) => a.name.localeCompare(b.name))
    const continents = filteredCountries.length > 0 && [...new Set(filteredCountries.map(country => country.continent))].sort()

    return (
        <>
            <h3>Visited Countries</h3>
            {continents && continents.map(continent =>
                <div className='profile-continent'>
                    <Card>
                        <Card.Header>
                            <strong>{continent}</strong>
                        </Card.Header>
                        <Card.Content>
                            {filteredCountries.map(cntry => (cntry.continent === continent ?
                                <p key={cntry.id}>
                                    {cntry.name}
                                    <img src={require(`../Assets/world-flags/${cntry.code}.png`)}
                                        alt='country-flag'
                                        className='country-flag' />
                                </p>
                                :
                                null))}
                        </Card.Content>
                    </Card>
                </div>
            )}

        </>
    )
}

export default ProfileVisited