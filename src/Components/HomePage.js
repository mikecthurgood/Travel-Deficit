import React from 'react'
import CountryCard from './CountryCard'
import WorldMapView from './WorldMapView'

const HomePage = ({ selectedCountry, handleMapClick, visitedCountries, sidebarVisible, closeSideBar, handleSideBarAccordionClick, activeIndex, addOrRemoveCountry, countryNamePopUp, countryNamePopUpValue, mouseXPosition, mouseYPosition, mousePosition, handleHover }) => (

    <div className='home-page-container'>
        <div className={sidebarVisible ? 'home-page-map-with-stats' : 'home-page-map'}>
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
            />
        </div>
    </div>
)

export default HomePage