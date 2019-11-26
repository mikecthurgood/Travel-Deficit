import React from 'react'
import WorldMapView from './WorldMapView'
import { Card } from 'semantic-ui-react'
import './Profile.css';


const ProfileVisited = ({ countries, visitedCountries }) => {

    const filteredCountries = countries.length > 0 && countries.filter(country => visitedCountries.includes(country.code)).sort((a, b) => a.name.localeCompare(b.name))
    const continents = filteredCountries.length > 0 && [...new Set(filteredCountries.map(country => country.continent))].sort()

    return (
        <div className='countries-container'>
            <Card className='profile-world-card'>
                <Card.Header>
                    Your World Map
                     </Card.Header>
                <Card.Content>
                    <WorldMapView
                        visitedCountries={visitedCountries}
                    />
                </Card.Content>
            </Card>
            <Card>
                <Card.Header>
                    Countries Visited ({filteredCountries.length})
                     </Card.Header>
                <Card.Content>
                    {continents && continents.map(continent =>
                        <div key={continent}>
                            <Card.Content>

                                <strong>{continent}</strong>
                                <hr />

                                {filteredCountries.map(cntry => (cntry.continent === continent ? <p key={cntry.id}>{cntry.name}</p> : null))}
                            </Card.Content>
                            <br />
                        </div>
                    )}
                </Card.Content>
            </Card>
        </div >
    )
}

export default ProfileVisited