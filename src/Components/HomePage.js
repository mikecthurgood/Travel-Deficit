import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import worldMap from '../Helpers/worldMap'
import Map from '../Helpers/MapStyle'
import CountryName from './CountryName'
import CountryCard from './CountryCard'

class HomePage extends React.Component {

    state = {
        mouseXPosition: 0,
        mouseYPosition: 0,
        countryNamePopUpValue: "",
        countryNamePopUp: false,
    }

    handleHover = (e) => {
        e.target && e.target.attributes && e.target.attributes.name && e.target.attributes.name.value ?
            this.setState({
                countryNamePopUpValue: e.target.attributes.name.value,
                countryNamePopUp: true
            })
            :
            this.setState({
                countryNamePopUp: false
            })
    }

    mousePosition = (e) => {
        this.setState({
            mouseXPosition: e.clientX,
            mouseYPosition: e.clientY
        })
    }

    render() {

        const { countryNamePopUp, countryNamePopUpValue, mouseXPosition, mouseYPosition } = this.state
        const { selectedCountry, handleMapClick, visitedCountries, sidebarVisible, closeSideBar, handleSideBarAccordionClick, activeIndex, addOrRemoveCountry } = this.props


        return (
            <div className='home-page-container'>
                <div className={sidebarVisible ? 'home-page-map-with-stats' : 'home-page-map'}>
                    <div id="chartdiv" style={{ width: "100%", height: "fit-content" }} onMouseMove={this.mousePosition}>
                        <Map>
                            <CountryName
                                visible={countryNamePopUp}
                                countryName={countryNamePopUpValue}
                                x={mouseXPosition}
                                y={mouseYPosition}
                            />
                            <VectorMap
                                {...worldMap}
                                onClick={handleMapClick}
                                onMouseOver={this.handleHover}
                                checkedLayers={visitedCountries}
                            />
                        </Map>
                    </div>
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
    }

}

export default HomePage