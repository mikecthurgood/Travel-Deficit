import React from 'react'
import './AddCountry.css'
import CountryCard from './CountryCard'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'


// import API from '../Helpers/API'

class AddCountry extends React.Component {

    state = {
        filterValue: ""
    }

    handleChange = (e) => {
        this.setState({ filterValue: e.target.value })
    }

    render() {
        let countries = this.props.countries
        let sortedCountries = countries.length > 0 && countries.sort((a, b) => a.name.localeCompare(b.name))
        // console.log(countries)
        console.log(sortedCountries)
        let filteredCountries = countries.length > 0 && sortedCountries.filter(country => country.name.toLowerCase().includes(this.state.filterValue.toLowerCase()))
        const { selectedCountry, visitedCountries, sidebarVisible, closeSideBar, handleSideBarAccordionClick, activeIndex, addOrRemoveCountry, handleCountryListClick, setFilter, addToWishList } = this.props

        return (
            <div className='country-list-container'>
                <div className='home-page-title'><h3>Select a country to view stats and options or <Link to='/'>find on map</Link></h3></div>

                <div className='country-list'>
                    <div className='filters'>
                        <div className='filter-button'><Button color={'blue'} onClick={() => setFilter('all')} fluid>All Countries</Button></div>
                        <div className='filter-button'><Button color={'blue'} onClick={() => setFilter('visited')} fluid>Visited Only</Button></div>
                        <div className='filter-button'><Button color={'blue'} onClick={() => setFilter('not-visited')} fluid>Not Visited Only</Button></div>
                    </div>
                    <input type="text" placeholder='Search Countries' onChange={this.handleChange} id='add-country-search-filter' />
                    <div className='country-list-items'>
                        {countries.length > 0 && filteredCountries.map(country =>
                            <div
                                key={country.id}
                                className={!this.props.visitedCountries.includes(country.code) ? 'country-item' : 'visited-country-item'}
                                onClick={() => handleCountryListClick(country.name)}
                            >
                                {country.name}
                            </div>
                        )}
                    </div>
                </div >
                <CountryCard
                    country={selectedCountry}
                    closeSideBar={closeSideBar}
                    handleClick={handleSideBarAccordionClick}
                    activeIndex={activeIndex}
                    addOrRemoveCountry={addOrRemoveCountry}
                    visitedCountries={visitedCountries}
                    selectedCountry={selectedCountry}
                    sidebarVisible={sidebarVisible}
                    addToWishList={addToWishList}
                />
            </div>
        )
    }
}

export default AddCountry