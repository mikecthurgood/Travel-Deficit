import React from 'react'
import './CountryCard.css';

import { Icon, Button, Accordion } from 'semantic-ui-react'


const CountryCard = ({ country, closeSideBar, handleClick, activeIndex, addOrRemoveCountry, visitedCountries, sidebarVisible, selectedCountry }) => {

    return (
        <div className={selectedCountry && sidebarVisible ? 'stats-sidebar' : 'sidebar-hidden'}>
            <div className={sidebarVisible ? 'country-card-content' : 'sidebar-hidden'}>
                <Button fluid className='close-sidebar-button' onClick={closeSideBar}>Close</Button>
                {country &&
                    <div>
                        <Accordion styled fluid>
                            <Accordion.Title
                                active={activeIndex === 0}
                                index={0}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                <Icon name='info' /><strong>Details</strong>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 0}>
                                <div className='country-card-header'>
                                    <img className='flag' src={require(`../Assets/world-flags/${country.code}.png`)} alt='country-flag' /><h2>{country.name}</h2></div>
                                <Icon name='map marker alternate' /> <strong>Region:</strong> {country.continent}
                            </Accordion.Content>
                            <Accordion.Title
                                active={activeIndex === 1}
                                index={1}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                <Icon name='users' /><strong>Population</strong>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 1}>
                                <p>
                                    <Icon name='users' />{country.population}
                                </p>
                            </Accordion.Content>
                            <Accordion.Title
                                active={activeIndex === 2}
                                index={2}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                <Icon name='sun' /><strong>Climate</strong>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 2}>
                                <p>
                                    {country.climate}
                                </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 3}
                                index={3}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                <Icon name='picture' /> <strong>Terrain:</strong>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 3}>
                                <p>
                                    {country.terrain}
                                </p>
                            </Accordion.Content>

                            <Accordion.Title
                                active={activeIndex === 4}
                                index={4}
                                onClick={handleClick}
                            >
                                <Icon name='dropdown' />
                                <Icon name='book' /><strong>Description</strong>
                            </Accordion.Title>
                            <Accordion.Content active={activeIndex === 4}>
                                <p>
                                    {country.description}
                                </p>
                            </Accordion.Content>
                        </Accordion>
                        <Button fluid className='add-country-button' onClick={() => addOrRemoveCountry(country.name)} > {!visitedCountries.includes(country.code) ? 'Add To Visited' : 'Remove From Visited'}</Button>
                        {!visitedCountries.includes(country.code) && <Button fluid className='add-to-wish-list' onClick={closeSideBar}>I Want To Go Here</Button>}
                        <Button fluid className='close-sidebar-button' onClick={closeSideBar}>Close</Button>


                    </div>

                }
            </div>

        </div>
    )
}

export default CountryCard