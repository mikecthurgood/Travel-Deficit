import React from 'react'

const CountryName = ({ visible, x, y, countryName }) => {
    let popupStyle = {
        // backgroundColor: 'grey',
        color: 'black',
        position: 'absolute',
        left: x - 80,
        top: y - 80,
        fontFamily: 'cursive'


    }
    return (
        <h2 style={popupStyle} className={visible ? 'show-map-popup-country-name' : 'hide-map-popup-country-name'}>{countryName}</h2>
    )
}

export default CountryName