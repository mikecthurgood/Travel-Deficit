import React from 'react'
import CountryCard from './CountryCard'

const CountryName = ({ visible, x, y, countryName }) => {
    let popupStyle = {
        color: 'black',
        position: 'absolute',
        left: x,
        top: y + 30,
        fontFamily: 'verdana'
    }
    return (
        <>
            <h2 style={popupStyle} className={visible ? 'show-map-popup-country-name' : 'hide-map-popup-country-name'}>{countryName}</h2>
            <CountryCard />
        </>
    )
}

export default CountryName