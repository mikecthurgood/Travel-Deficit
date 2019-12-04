import React from 'react'
import API from '../Helpers/API'
import { Card, Button } from 'semantic-ui-react'
import './Recommendations.css';
import RecommendationTrips from './RecommendationTrips'
// import API from '../Helpers/API'


const configObj = (type, body = null) => {
    return {
        method: type,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}

class Recommendations extends React.Component {

    state = {
        wishlist: [],
        quotes: []
    }

    componentDidMount() {
        const wishlist = this.props.countries.length > 0 && this.props.countries.filter(country => this.props.wishlist.includes(country.id))
        console.log(wishlist)

        this.props.countries.length > 0 && wishlist.map(country => fetch(`http://localhost:3004/countries?name=${country.name}`).then(resp => resp.json()).then(country => this.setState({ wishlist: [...this.state.wishlist, ...country] })))

        this.props.countries.length > 0 && wishlist.map(country => API.travelLocations(country.name)
            .then(json => json['Places'][1]['CityId'] !== '-sky' ? API.getQuotes(json['Places'][1]['PlaceId']) : null).then(json => this.setState({ quotes: [...this.state.quotes, { name: country.name, data: json }] })))
        // (json => API.createFlightSession("LOND-sky", json['Places'][1]['PlaceId'], this.dateInXDays(7), this.dateInXDays(14))))

        // console.log(json['Places'][1])))
        // (json => json['Places'].map(country => console.log(country['PlaceName']))))
        // console.log(this.state.wishlist)
        // fetch('http://localhost:3004/countries').then(resp => resp.json()).then(console.log)

        // this.props.countries.length > 0 && this.props.countries.map(country => this.trivosoTest(country.name))
        // this.trivosoTest('Paraguay')
        // fetch('https://www.triposo.com/api/20190906/location.json?id=Paraguay&account=SNWVY7BT&token=iwqr7pi47cyfp8tobp16qxx6luhn0k0f').then(resp => resp.json().then(console.log))
    }

    // upload = (object) => {
    //     fetch('http://localhost:3004/countries', configObj('POST', object))
    //         .then(resp => resp.json()).then(console.log)
    // }


    // trivosoTest = (country) => {
    //     API.recommendations(country).then(resp => {
    //         this.upload(resp.results[0])
    //     })
    // }

    dateInXDays = (x = 0) => {
        let date = new Date();
        const dd = String(date.getDate() + x).padStart(2, '0')
        const mm = String(date.getMonth() + 1).padStart(2, '0')
        const yyyy = date.getFullYear()
        date = yyyy + '-' + mm + '-' + dd
        return date
    }

    render() {
        const wl = this.state.wishlist
        const { quotes } = this.state
        return (
            <>
                <br />
                <h1>Recommendations Coming Soon</h1>
                <div className='recommendations-page-container'>
                    {wl.length > 0 ? <>
                        <div className='wishlist'><h2>Your Wishlist</h2></div>
                        {this.props.countries.length > 0 && wl.map(country => (

                            <Card className='recommendation-card'>
                                <Card.Header>
                                    <h2>{country.id}</h2>
                                </Card.Header>
                                <Card.Content className='country-image-container'>
                                    <div className='country-image-inner-container'>
                                        <img className='country-image' src={country.images[0].source_url} />
                                    </div>
                                </Card.Content>
                                <Card.Content>
                                    <div className='suggested-trip'>
                                        <RecommendationTrips countryName={country.name} quotes={this.state.quotes} />
                                    </div>
                                </Card.Content>
                                <Card.Content>
                                    <a href="https://www.skyscanner.net/" target='popup' onClick="window.open('https://www.skyscanner.net/','popup','width=600,height=600'); return false;"><Button fluid> Visit Skyscanner for more flights </Button></a>
                                </Card.Content>
                            </Card>
                        ))}</> :
                        <h2>Add some countries to your wishlist to view recommendations</h2>}
                </div>
            </>
        )
    }
}

export default Recommendations  