import React from 'react'
import API from '../Helpers/API'
import { Card, Image } from 'semantic-ui-react'
import './Recommendations.css';


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
        wishlist: []
    }

    componentDidMount() {
        const wishlist = this.props.countries.length > 0 && this.props.countries.filter(country => this.props.wishlist.includes(country.id))
        console.log(wishlist)
        this.props.countries.length > 0 && wishlist.map(country => fetch(`http://localhost:3004/countries?name=${country.name}`).then(resp => resp.json()).then(country => this.setState({ wishlist: [...this.state.wishlist, ...country] })))
        console.log(this.state.wishlist)
        // fetch('http://localhost:3004/countries').then(resp => resp.json()).then(console.log)

        // this.props.countries.length > 0 && this.props.countries.map(country => this.trivosoTest(country.name))
        // this.trivosoTest('Paraguay')
        // fetch('https://www.triposo.com/api/20190906/location.json?id=Paraguay&account=SNWVY7BT&token=iwqr7pi47cyfp8tobp16qxx6luhn0k0f').then(resp => resp.json().then(console.log))
    }

    upload = (object) => {
        fetch('http://localhost:3004/countries', configObj('POST', object))
            .then(resp => resp.json()).then(console.log)
    }


    trivosoTest = (country) => {
        API.recommendations(country).then(resp => {
            this.upload(resp.results[0])
        })
    }




    render() {
        const wl = this.state.wishlist
        return (
            <div className='recommendations-page-container'>
                {this.props.countries.length > 0 && wl.map(country => (
                    <Card className='recommendation-card'>
                        <Card.Header>
                            <h2>{country.id}</h2>
                        </Card.Header>
                        <Card.Content>
                            <img className='country-image' src={country.images[0].source_url} />
                        </Card.Content>
                    </Card>
                ))}
            </div>
        )
    }
}

export default Recommendations  