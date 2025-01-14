import React from 'react'
import CountryCard from './CountryCard'
import WorldMapView from './WorldMapView'
import { Link } from 'react-router-dom'

const HomePage = ({ selectedCountry, handleMapClick, visitedCountries, sidebarVisible, closeSideBar, handleSideBarAccordionClick, activeIndex, addOrRemoveCountry, countryNamePopUp, countryNamePopUpValue, mouseXPosition, mouseYPosition, mousePosition, handleHover, addToWishList, wishlist }) => (

    <div className='home-page-container'>
        <div className={sidebarVisible ? 'home-page-map-with-stats' : 'home-page-map'}>
            <div className='home-page-title'><h3>Select a country to view stats and options or <Link to='/add-country'>search by name</Link></h3></div>
            <WorldMapView
                countryNamePopUp={countryNamePopUp}
                countryNamePopUpValue={countryNamePopUpValue}
                mouseXPosition={mouseXPosition}
                mouseYPosition={mouseYPosition}
                handleMapClick={handleMapClick}
                handleHover={handleHover}
                visitedCountries={visitedCountries}
                mousePosition={mousePosition}
            />
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
                wishlist={wishlist}


            />
        </div>
    </div>
)

export default HomePage