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
        let mappedCountries = countries.length > 0 && countries.map(country => country.name).sort()
        console.log(mappedCountries)
        let filteredCountries = countries.length > 0 && mappedCountries.filter(country => country.toLowerCase().includes(this.state.filterValue.toLowerCase()))
        const { selectedCountry, visitedCountries, sidebarVisible, closeSideBar, handleSideBarAccordionClick, activeIndex, addOrRemoveCountry, handleCountryListClick } = this.props

        return (
            <>
                <div className='country-list'>
                    <input type="text" placeholder='Search Countries' onChange={this.handleChange} id='add-country-search-filter' />
                    {countries.length > 0 && filteredCountries.map(country =>
                        <div
                            key={country}
                            className={!this.props.visitedCountries.includes(country) ? 'country-item' : 'visited-country-item'}
                            onClick={() => handleCountryListClick(country)}
                        >
                            {country}
                            <button
                                className={!this.props.visitedCountries.includes(country) ? 'add-country-button' : 'remove-country-button'}
                                onClick={() => this.props.addOrRemoveCountry(country)}>
                                {!this.props.visitedCountries.includes(country) ? '+' : '-'}
                            </button>
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