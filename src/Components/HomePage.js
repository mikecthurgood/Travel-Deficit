import React from 'react'
import { VectorMap } from '@south-paw/react-vector-maps';
import worldMap from '../Helpers/worldMap'
import Map from '../Helpers/MapStyle'
import CountryName from './CountryName'


import logo from '../logo.svg';


class HomePage extends React.Component {

    state = {
        visitedCountries: [],
        mouseXPosition: 0,
        mouseYPosition: 0,
        countryNamePopUpValue: "",
        countryNamePopUp: false
    }

    handleClick = (e) => {
        // debugger
        // console.log(e.target)
        // console.log(e.target.attributes.name.value)
        // console.log(e.clientX, e.clientY)
        e.target && e.target.attributes && e.target.attributes.name && e.target.attributes.name.value &&
            this.setState({ visitedCountries: [...this.state.visitedCountries, e.target.id] })
    }

    handleHover = (e) => {
        // console.log(e.target)
        e.target && e.target.attributes && e.target.attributes.name && e.target.attributes.name.value ?
            //     console.log(e.target.attributes.name.value)
            // console.log(e.clientX, e.clientY)
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
        console.log(e.clientX, e.clientY)
        this.setState({
            mouseXPosition: e.clientX,
            mouseYPosition: e.clientY
        })
    }

    render() {

        const { countryNamePopUp, countryNamePopUpValue, mouseXPosition, mouseYPosition, } = this.state
        return (
            <div className="App" >
                <div id="chartdiv" style={{ width: "100%", height: "fit-content" }} onMouseMove={this.mousePosition}>
                    <Map >
                        <CountryName
                            visible={countryNamePopUp}
                            countryName={countryNamePopUpValue}
                            x={mouseXPosition}
                            y={mouseYPosition}
                        />
                        <VectorMap
                            {...worldMap}
                            onClick={this.handleClick}
                            onMouseOver={this.handleHover}
                            checkedLayers={this.state.visitedCountries}
                        />
                    </Map>
                </div>

                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
              </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
              </a>
                </header>
            </div >
        )
    }

}

export default HomePage