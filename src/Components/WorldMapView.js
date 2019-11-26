import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import worldMap from '../Helpers/worldMap'
import Map from '../Helpers/MapStyle'
import CountryName from './CountryName'

const HomePage = ({ handleMapClick, visitedCountries, countryNamePopUp, countryNamePopUpValue, mouseXPosition, mouseYPosition, mousePosition, handleHover }) => (

    <div id="chartdiv" style={{ width: "100%", height: "fit-content" }} onMouseMove={mousePosition}>
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
                onMouseOver={handleHover}
                checkedLayers={visitedCountries}
            />
        </Map>
    </div>
)

export default HomePage