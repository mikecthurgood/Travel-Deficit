import React from 'react'
import './AddCountry.css'
import CountryCard from './CountryCard'

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
        const { selectedCountry, visitedCountries, sidebarVisible, closeSideBar, handleSideBarAccordionClick, activeIndex, addOrRemoveCountry, handleCountryListClick } = this.props

        return (
            <>
                <div className='country-list'>
                    <input type="text" placeholder='Search Countries' onChange={this.handleChange} id='add-country-search-filter' />
                    {countries.length > 0 && filteredCountries.map(country =>
                        <div
                            key={country.id}
                            className={!this.props.visitedCountries.includes(country.code) ? 'country-item' : 'visited-country-item'}
                            onClick={() => handleCountryListClick(country.name)}
                        >
                            {country.name}
                        </div>
                    )}
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

                />
            </>
        )
    }
}

export default AddCountry